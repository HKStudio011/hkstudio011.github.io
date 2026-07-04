using User_Site.Models;

namespace User_Site.Services;

public class GitHubService
{
    private List<RepoInfo>? _repos;

    public void SetRepos(List<RepoInfo> repos)
    {
        _repos = repos;
    }

    public (List<RepoInfo> Repos, int TotalPages) GetPage(
        string sortBy, string direction, int page, int pageSize)
    {
        if (_repos == null)
            return (new List<RepoInfo>(), 1);

        var sorted = (sortBy switch
        {
            "stars" => direction == "desc"
                ? _repos.OrderByDescending(r => r.StargazersCount).ToList()
                : _repos.OrderBy(r => r.StargazersCount).ToList(),
            _ => direction == "desc"
                ? _repos.OrderByDescending(r => r.UpdatedAt).ToList()
                : _repos.OrderBy(r => r.UpdatedAt).ToList(),
        });

        var totalPages = (int)Math.Ceiling((double)sorted.Count / pageSize);
        if (totalPages < 1) totalPages = 1;
        var paged = sorted.Skip((page - 1) * pageSize).Take(pageSize).ToList();

        return (paged, totalPages);
    }
}
