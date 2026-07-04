namespace User_Site.Models;

public class RepoInfo
{
    public string Name { get; set; } = string.Empty;
    public string? Description { get; set; }
    public string HtmlUrl { get; set; } = string.Empty;
    public string? Language { get; set; }
    public int StargazersCount { get; set; }
    public DateTime UpdatedAt { get; set; }
}
