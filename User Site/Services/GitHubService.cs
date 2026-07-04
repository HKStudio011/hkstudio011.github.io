using System.Net.Http.Json;
using System.Text.Json.Serialization;
using User_Site.Models;

namespace User_Site.Services;

public class GitHubService
{
    private static readonly HttpClient _http = new();
    private List<RepoInfo>? _repos;

    public async Task<(List<RepoInfo> Repos, int TotalPages)> GetPageAsync(
        string sortBy, string direction, int page, int pageSize)
    {
        await EnsureReposLoadedAsync();

        var sorted = (sortBy switch
        {
            "stars" => direction == "desc"
                ? _repos!.OrderByDescending(r => r.StargazersCount).ToList()
                : _repos!.OrderBy(r => r.StargazersCount).ToList(),
            _ => direction == "desc"
                ? _repos!.OrderByDescending(r => r.UpdatedAt).ToList()
                : _repos!.OrderBy(r => r.UpdatedAt).ToList(),
        });

        var totalPages = (int)Math.Ceiling((double)sorted.Count / pageSize);
        if (totalPages < 1) totalPages = 1;
        var paged = sorted.Skip((page - 1) * pageSize).Take(pageSize).ToList();

        return (paged, totalPages);
    }

    private async Task EnsureReposLoadedAsync()
    {
        if (_repos != null) return;

        var raw = await _http.GetFromJsonAsync<List<GitHubRepoRaw>>(
            "https://api.github.com/users/HKStudio011/repos?per_page=100&sort=updated");

        _repos = raw?.Select(r => new RepoInfo
        {
            Name = r.Name,
            Description = r.Description,
            HtmlUrl = r.HtmlUrl,
            Language = r.Language,
            StargazersCount = r.StargazersCount,
            UpdatedAt = r.UpdatedAt,
        }).ToList() ?? new List<RepoInfo>();
    }

    private sealed class GitHubRepoRaw
    {
        [JsonPropertyName("name")]
        public string Name { get; set; } = string.Empty;
        [JsonPropertyName("description")]
        public string? Description { get; set; }
        [JsonPropertyName("html_url")]
        public string HtmlUrl { get; set; } = string.Empty;
        [JsonPropertyName("language")]
        public string? Language { get; set; }
        [JsonPropertyName("stargazers_count")]
        public int StargazersCount { get; set; }
        [JsonPropertyName("updated_at")]
        public DateTime UpdatedAt { get; set; }
    }
}
