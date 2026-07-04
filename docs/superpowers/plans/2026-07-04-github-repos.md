# GitHub Public Repos Listing Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace hardcoded GitHub repo cards with dynamic listing fetched from GitHub API, with sort (updated/stars, asc/desc) and pagination (6/page).

**Architecture:** Pure client-side Blazor WASM — fetch all public repos once into memory via HttpClient, then sort/paginate client-side without further API calls.

**Tech Stack:** Blazor WASM (.NET 10), GitHub REST API v3, Bootstrap 5 cards

**No test project exists in this repo; verification is via `dotnet build` + manual browser check.**

## Global Constraints

- All files live under `User Site/` directory
- Uses existing Tailwind `tw:` prefix convention and Bootstrap 5 card styles
- Button labels and UI text must stay in Vietnamese (matching existing `Xem ngay` pattern)
- API endpoint: `https://api.github.com/users/HKStudio011/repos?per_page=100&sort=updated`
- GitHub API requires `User-Agent` header
- Sort controls toggle between `updated` and `stars`, each with `asc`/`desc` direction
- Default sort: updated desc
- Pagination: 6 repos per page

---

## File Structure

| File | Action | Responsibility |
|------|--------|----------------|
| `User Site/Models/RepoInfo.cs` | Create | DTO mapping JSON fields from GitHub API |
| `User Site/Services/GitHubService.cs` | Create | Fetch all repos from API, cache, sort, paginate |
| `User Site/Program.cs` | Modify (line 13) | Register GitHubService as singleton |
| `User Site/_Imports.razor` | Modify (line 10) | Add `@using User_Site.Models` + `@using User_Site.Services` |
| `User Site/Pages/Home.razor` | Modify (lines 318-361) | Replace hardcoded GitHub section with dynamic sort/paginate UI |

---

### Task 1: Create RepoInfo Model

**Files:**
- Create: `User Site/Models/RepoInfo.cs`
- Verify: `dotnet build`

**Interfaces:**
- Produces: `RepoInfo` class with `Name`, `Description`, `HtmlUrl`, `Language`, `StargazersCount`, `UpdatedAt` properties

- [ ] **Step 1: Create `Models/RepoInfo.cs`**

```csharp
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
```

- [ ] **Step 2: Verify build succeeds**

```bash
cd "User Site" && dotnet build
```

Expected: Build succeeded with no errors.

---

### Task 2: Create GitHubService

**Files:**
- Create: `User Site/Services/GitHubService.cs`
- Modify: `User Site/Program.cs` (line 13)
- Modify: `User Site/_Imports.razor` (line 10)
- Verify: `dotnet build`

**Interfaces:**
- Consumes: `RepoInfo` from Task 1
- Produces: `GitHubService` with `GetPageAsync(string sortBy, string direction, int page, int pageSize) -> (List<RepoInfo> Repos, int TotalPages)`
- Register: `builder.Services.AddSingleton<GitHubService>()`

- [ ] **Step 1: Create `Services/GitHubService.cs`**

```csharp
using System.Net.Http.Json;
using System.Text.Json.Serialization;
using User_Site.Models;

namespace User_Site.Services;

public class GitHubService
{
    private static readonly HttpClient _http = new();
    private List<RepoInfo>? _repos;

    public GitHubService()
    {
        _http.DefaultRequestHeaders.UserAgent.ParseAdd("HKStudio-GitHubPage/1.0");
    }

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
```

- [ ] **Step 2: Register service in `Program.cs`**

Add after line 11 (`builder.Services.AddSingleton<User_Site.Store.Store>();`):

```csharp
builder.Services.AddSingleton<User_Site.Services.GitHubService>();
```

- [ ] **Step 3: Add usings to `_Imports.razor`**

Add at end of file (after line 10 `@using User_Site.Layout`):

```razor
@using User_Site.Models
@using User_Site.Services
```

- [ ] **Step 4: Verify build**

```bash
cd "User Site" && dotnet build
```

Expected: Build succeeded with no errors.

---

### Task 3: Update Home.razor GitHub Section

**Files:**
- Modify: `User Site/Pages/Home.razor` (replace lines 318-361 + add `@code` block)
- Verify: `dotnet build`

**Interfaces:**
- Consumes: `GitHubService.GetPageAsync(sortBy, direction, page, 6)` from Task 2

- [ ] **Step 1: Replace the GitHub section HTML (lines 318-361)**

Replace from `<!-- Nhóm GitHub -->` to the closing `</div>` before `<!-- Nhóm Email -->`:

Old (lines 318-363):
```razor
                    <!-- Nhóm GitHub -->
                    <div class="container my-5">
                        <!-- Tiêu đề -->
                        <h2 class="tw:text-2xl tw:!font-bold tw:!text-white tw:!mb-6 d-flex align-items-center">
                            💻 GitHub
                        </h2>

                        <!-- Grid -->
                        <div class="row g-4">
                            <!-- Card 1 -->
                            <div class="col-12 col-md-6 col-lg-4">
                                <div
                                    class="card tw:rounded-xl tw:shadow-md tw:hover:shadow-2xl tw:transition tw:duration-300 tw:bg-white tw:border-0 tw:hover:-translate-y-1">
                                    <div class="card-body">
                                        <h3 class="card-title tw:font-bold tw:text-lg tw:mb-2">
                                            🐙 HK Studio
                                        </h3>
                                        <p class="card-text tw:text-sm tw:text-gray-600">
                                            Tổng hợp Repo của tôi
                                        </p>
                                        <a href="https://github.com/HKStudio011" target="_blank" rel="noopener noreferrer"
                                            class="btn btn-sm btn-outline-dark tw:mt-3 tw:flex tw:items-center tw:gap-2 tw:hover:bg-gray-800 tw:hover:text-white">
                                            <span>🔗</span> <span>Xem trên GitHub</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <!-- Card 2 -->
                            <div class="col-12 col-md-6 col-lg-4">
                                <div class="card tw:rounded-xl tw:shadow-md tw:hover:shadow-2xl tw:transition tw:duration-300 tw:bg-white tw:border-0 tw:hover:-translate-y-1">
                                    <div class="card-body">
                                        <h3 class="card-title tw:font-bold tw:text-lg tw:mb-2">
                                            🐙 hkstudio011.github.io
                                        </h3>
                                        <p class="card-text tw:text-sm tw:text-gray-600">
                                            Repo tích hợp Vite + Tailwind vào Blazor
                                        </p>
                                        <a href="https://github.com/HKStudio011/hkstudio011.github.io" target="_blank" rel="noopener noreferrer"
                                           class="btn btn-sm btn-outline-dark tw:mt-3 tw:flex tw:items-center tw:gap-2 tw:hover:bg-gray-800 tw:hover:text-white">
                                            <span>🔗</span> <span>Xem trên GitHub</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
```

New:
```razor
                    <!-- Nhóm GitHub -->
                    <div class="container my-5">
                        <h2 class="tw:text-2xl tw:!font-bold tw:!text-white tw:!mb-6 d-flex align-items-center">
                            💻 GitHub
                        </h2>

                        <!-- Static org card -->
                        <div class="row g-4 mb-4">
                            <div class="col-12 col-md-6 col-lg-4">
                                <div
                                    class="card tw:rounded-xl tw:shadow-md tw:hover:shadow-2xl tw:transition tw:duration-300 tw:bg-white tw:border-0 tw:hover:-translate-y-1">
                                    <div class="card-body">
                                        <h3 class="card-title tw:font-bold tw:text-lg tw:mb-2">
                                            🐙 HK Studio
                                        </h3>
                                        <p class="card-text tw:text-sm tw:text-gray-600">
                                            Tổng hợp Repo của tôi
                                        </p>
                                        <a href="https://github.com/HKStudio011" target="_blank" rel="noopener noreferrer"
                                            class="btn btn-sm btn-outline-dark tw:mt-3 tw:flex tw:items-center tw:gap-2 tw:hover:bg-gray-800 tw:hover:text-white">
                                            <span>🔗</span> <span>Xem trên GitHub</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        @if (_gitHubError)
                        {
                            <div class="alert alert-warning text-center">Không thể tải danh sách repo. Vui lòng thử lại sau.</div>
                        }
                        else
                        {
                            <!-- Sort controls -->
                            <div class="d-flex gap-2 mb-4 flex-wrap">
                                <button class="btn btn-sm @(_sortBy == "updated" ? "btn-light" : "btn-outline-light")"
                                        @onclick="() => SortBy("updated")">
                                    📅 Updated @(_sortBy == "updated" ? (_direction == "desc" ? "↓" : "↑") : "")
                                </button>
                                <button class="btn btn-sm @(_sortBy == "stars" ? "btn-light" : "btn-outline-light")"
                                        @onclick="() => SortBy("stars")">
                                    ⭐ Stars @(_sortBy == "stars" ? (_direction == "desc" ? "↓" : "↑") : "")
                                </button>
                            </div>

                            @if (_loading)
                            {
                                <div class="text-center text-white py-4">Đang tải...</div>
                            }
                            else
                            {
                                <div class="row g-4">
                                    @foreach (var repo in _repos)
                                    {
                                        <div class="col-12 col-md-6 col-lg-4">
                                            <div class="card tw:rounded-xl tw:shadow-md tw:hover:shadow-2xl tw:transition tw:duration-300 tw:bg-white tw:border-0 tw:hover:-translate-y-1 tw:h-full">
                                                <div class="card-body d-flex flex-column">
                                                    <h3 class="card-title tw:font-bold tw:text-lg tw:mb-2">🐙 @repo.Name</h3>
                                                    @if (!string.IsNullOrEmpty(repo.Description))
                                                    {
                                                        <p class="card-text tw:text-sm tw:text-gray-600 tw:flex-grow-1">@repo.Description</p>
                                                    }
                                                    <div class="tw:mt-2 tw:mb-3 d-flex gap-2 flex-wrap">
                                                        @if (!string.IsNullOrEmpty(repo.Language))
                                                        {
                                                            <span class="badge bg-secondary">@repo.Language</span>
                                                        }
                                                        @if (repo.StargazersCount > 0)
                                                        {
                                                            <span class="badge bg-warning text-dark">⭐ @repo.StargazersCount</span>
                                                        }
                                                    </div>
                                                    <a href="@repo.HtmlUrl" target="_blank" rel="noopener noreferrer"
                                                       class="btn btn-sm btn-outline-dark tw:flex tw:items-center tw:gap-2 tw:hover:bg-gray-800 tw:hover:text-white d-inline-flex tw:mt-auto">
                                                        <span>🔗</span> <span>Xem trên GitHub</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                </div>

                                @if (_totalPages > 1)
                                {
                                    <div class="d-flex justify-content-center align-items-center gap-3 mt-4">
                                        <button class="btn btn-sm btn-outline-light" disabled="@(_currentPage <= 1)"
                                                @onclick="() => GoToPage(_currentPage - 1)">
                                            ‹ Prev
                                        </button>
                                        <span class="text-white">Page @_currentPage / @_totalPages</span>
                                        <button class="btn btn-sm btn-outline-light" disabled="@(_currentPage >= _totalPages)"
                                                @onclick="() => GoToPage(_currentPage + 1)">
                                            Next ›
                                        </button>
                                    </div>
                                }
                            }
                        }
                    </div>
```

- [ ] **Step 2: Add `@code` block at end of Home.razor**

Replace the existing empty `@code { }` block (line 441) with:

```razor
@code {
    private List<RepoInfo> _repos = new();
    private int _currentPage = 1;
    private int _totalPages = 1;
    private bool _loading = true;
    private bool _gitHubError;
    private string _sortBy = "updated";
    private string _direction = "desc";

    [Inject]
    private GitHubService GitHubService { get; set; } = default!;

    protected override async Task OnInitializedAsync()
    {
        await LoadPageAsync();
    }

    private async Task SortBy(string sortBy)
    {
        if (_sortBy == sortBy)
        {
            _direction = _direction == "desc" ? "asc" : "desc";
        }
        else
        {
            _sortBy = sortBy;
            _direction = "desc";
        }
        _currentPage = 1;
        await LoadPageAsync();
    }

    private async Task GoToPage(int page)
    {
        _currentPage = page;
        await LoadPageAsync();
    }

    private async Task LoadPageAsync()
    {
        _loading = true;
        try
        {
            var result = await GitHubService.GetPageAsync(_sortBy, _direction, _currentPage, 6);
            _repos = result.Repos;
            _totalPages = result.TotalPages;
            _gitHubError = false;
        }
        catch
        {
            _gitHubError = true;
        }
        finally
        {
            _loading = false;
        }
    }
}
```

- [ ] **Step 3: Verify build**

```bash
cd "User Site" && dotnet build
```

Expected: Build succeeded with no errors.

---

## Self-Review

**1. Spec coverage:**
- ✅ Dynamic repo listing from GitHub API → Task 2 (fetch) + Task 3 (render)
- ✅ Sort by updated (desc/asc) → Task 2 (sort logic) + Task 3 (sort buttons)
- ✅ Sort by stars (desc/asc) → Task 2 (sort logic) + Task 3 (sort buttons)
- ✅ Pagination (6/page) → Task 2 (pagination logic) + Task 3 (pagination UI)
- ✅ Static HK Studio org card always visible → Task 3 (first card in GitHub section)
- ✅ hkstudio011.github.io moves with sort → handled by fetching all repos without pinning

**2. Placeholder scan:** All steps contain complete code. No TBD/TODO/fill-in-later patterns.

**3. Type consistency:** `GetPageAsync` signature `(string sortBy, string direction, int page, int pageSize) -> (List<RepoInfo> Repos, int TotalPages)` is used identically in Task 2 (definition) and Task 3 (call site).
