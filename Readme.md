# Tổng quan tích hợp Vite + Tailwind vào Blazor

---

## Cấu trúc thư mục đề xuất

```
/BlazorApp
│
├── wwwroot/
│   └── js/
│       └── assets/           # Vite xuất file đã build
│
├── vite-project/            # Mã frontend quản lý bằng Vite
│   ├── index.html
│   ├── main.js
│   ├── style.css
│   ├── vite.config.js
│   ├── tailwind.config.js    # nếu cần tùy biến/scan Razor
```

---

## Thiết lập Vite và cài thư viện bằng npm**Khởi tạo frontend với Vite:**

1. ```
   npm init vite@latest
   # Chọn template: vanilla
   npm install
   ```
2. **Cài Tailwind v4 và plugin Vite chính thức:**

   ```
   npm install tailwindcss @tailwindcss/vite --save-dev
   ```
3. **Cài thêm thư viện từ npm (ví dụ):**

   * **Bootstrap:**
     ```
     npm install bootstrap
     ```
   * **Neat gradients:**
     ```
     npm install @firecms/neat three
     ```
   * **JQuery:**
     ```
     npm install jquery
     npm install --save-dev @types/jquery
     ```
4. **Cài chokidar-cli**

   ```
   npm install chokidar-cli --save-dev
   ```

> **Gợi ý:** Thêm script tiện lợi vào `vite-frontend/`[`package.json`](https://package.json):
>
> ```
> {
>   "scripts": {
>     "dev": "vite",
>     "build": "tsc && vite build",
>     "preview": "vite preview",
>     "watch": "chokidar \"../**/*.razor\" \"src/**/*.{ts,js}\" \"src/**/*.css\" -c \"tsc && vite build\""
>   }
> }
> ```

---

## Cấu hình Vite và Tailwind

1. **[vite.config.js]() (xuất ra wwwroot/js của Blazor):**
   ```
   import { defineConfig } from 'vite';
   import tailwindcss from '@tailwindcss/vite';
   import path from 'path';

   export default defineConfig({
     build: {
       outDir: path.resolve(__dirname, '../wwwroot/js'),
       emptyOutDir: true,
       lib: {
         entry: path.resolve(__dirname, 'src/main.ts'),
         formats: ['es'], // build ra ES module
         fileName: () => 'assets/main.js'
       },
       rollupOptions: {
         output: {
           assetFileNames: 'assets/style.css'
         }
       }
     },
     plugins: [tailwindcss()]
   });
   ```
2. **[style.css]() (kích hoạt Tailwind):**
   ```
   @config "../tailwind.config.js";
   @import 'bootstrap/dist/css/bootstrap.min.css';
   @import "tailwindcss" prefix(tw);
   /* dung tw: khi gọi class của tailwind */
   ```
3. **[main.js]() (import CSS và ví dụ dùng thư viện npm):**
   ```
   import './style.css';

   // Ví dụ import từ npm:
   import 'bootstrap/dist/css/bootstrap.min.css';
   import Chart from 'chart.js/auto';

   // Gắn hàm để Blazor gọi
   window.showChart = function () {
     const el = document.getElementById('myChart');
     if (!el) return;
     new Chart(el, {
       type: 'bar',
       data: {
         labels: ['A', 'B', 'C'],
         datasets: [{ label: 'Demo', data: [10, 20, 30] }]
       }
     });
   };

   export function testViteLibrary() {
     console.log("Vite library successfully imported!");
   }
   ```
4. **[tailwind.config.js]() (để Tailwind quét class trong Razor):**
   ```
   /** @type {import('tailwindcss').Config} */
   module.exports = {
     content: [
       '../Pages/**/*.razor',
       '../Components/**/*.razor',
       '../Shared/**/*.razor',
       '../wwwroot/index.html',
     ],
     theme: {
       extend: {},
     },
     plugins: [],
   }
   ```

> **Lưu ý:** Với Tailwind v4 và plugin `@tailwindcss/vite`, không bắt buộc PostCSS. Chỉ tạo [`tailwind.config.js`](https://tailwind.config.js) khi cần scan Razor hoặc tùy biến theme.

---

## Quy trình chạy dev và build production

1. **Phát triển (tự rebuild khi thay đổi):**

   * **Chạy watcher để build lại khi thay đổi Razor/TS:**
     ```
     npm run watch
     dotnet watch run
     ```
   * **Cách hoạt động:** Mỗi khi Anh thêm/sửa class Tailwind trong file `.razor` hoặc `.ts`, `chokidar` sẽ gọi `tsc && vite build`, và file mới sẽ được ghi ra `wwwroot/js/assets`. Blazor sẽ thấy thay đổi ngay khi reload.
2. **Build production (xuất ra wwwroot/js/assets):**

   ```
   npm run build
   ```

   * **Kết quả:** File tối ưu nằm trong `wwwroot/js/assets` (JS/CSS tách riêng nhờ `cssCodeSplit`).
3. **Tham chiếu asset trong Blazor:**

   * **Blazor Server (`Pages/_Host.cshtml`):**
     ```
     <link href="js/assets/style.css" rel="stylesheet" />
     <script src="js/assets/main.js" type="module"></script>
     ```
   * **Blazor WASM (`wwwroot/`[`index.html`](https://index.html)):**
     ```
     <link href="js/assets/style.css" rel="stylesheet" />
     <script src="js/assets/main.js" type="module"></script>
     ```
4. **Gọi JS từ Razor qua IJSRuntime (ví dụ):**

   ```
   @page "/"
   @inject IJSRuntime JS

   <h1 class="text-2xl font-bold text-blue-600">Blazor + Tailwind + Vite</h1>

   <button class="px-3 py-2 bg-green-600 text-white rounded" @onclick="Show">
     Hiển thị biểu đồ
   </button>

   <canvas id="myChart" width="400" height="200"></canvas>

   <script type="module">
       import { $,testViteLibrary} from '/js/assets/main.js';

       $(document).ready(function () {
           testViteLibrary();
   	});
   </script>

   @code {
     async Task Show() => await JS.InvokeVoidAsync("showChart");
   }
   ```

---

## Lưu ý quan trọng để mọi thứ mượt mà

* **Dev vs Build:** Trong dev, dùng `npm run watch` để Tailwind tự generate CSS khi thêm class mới và ghi ra wwwroot. Trước khi deploy, chạy `npm run build`.
* **Quét Razor:** Đảm bảo đường dẫn trong [`tailwind.config.js`](https://tailwind.config.js) đúng vị trí thư mục `.razor` và `.`[`razor.css`](https://razor.css).
* **CSS tách riêng:** Dùng `cssCodeSplit: true` để có file `.css` riêng trong `js/assets`, giúp cache tốt hơn.
* **Không cần copy thủ công:** Vite sẽ resolve thư viện từ `node_modules` khi Anh `import` trong [`main.js`](https://main.js).
* **Phiên bản Node:** Tailwind v4 yêu cầu Node 18+ để hoạt động ổn định.

---

# Triển khai Blazor WebAssembly lên GitHub Pages:

Bạn có thể triển khai Blazor WebAssembly (WASM) lên GitHub Pages vì đây là ứng dụng chạy hoàn toàn trên client. Dưới đây là quy trình đầy đủ, kèm cấu hình cho cả user site và project site.

---

## Tổng quan nhanh

* **User site:** [username.github.io]() → base href là “/”.
* **Project site:** [username.github.io/repo-name]() → base href là “/repo-name/”.
* **Cần có:** .NET SDK, repo GitHub, file `.nojekyll`, và workflow GitHub Actions để build và deploy bằng environment `github-pages` (không tạo nhánh `gh-pages` vật lý).

---

## Chuẩn bị

* **Cài đặt .NET SDK:** .NET 8 trở lên.
* **Tài khoản GitHub:** đã tạo repo.
* **Bật GitHub Pages:** sẽ bật ở bước sau, nguồn từ GitHub Actions.

---

## Bước 1: Tạo hoặc chuẩn bị dự án Blazor WebAssembly

* **Tạo mới dự án:**
  ```
  dotnet new blazorwasm -o MyBlazorApp
  cd MyBlazorApp
  ```
* **Kiểm tra chạy local:**
  ```
  dotnet run
  ```
* **Xác định loại triển khai:**
  * **User site:** dùng repo tên [`username.github.io`](https://username.github.io).
  * **Project site:** dùng repo tên bất kỳ (ví dụ `my-blazor-app`), site sẽ là [`https://username.github.io/my-blazor-app`](https://username.github.io/my-blazor-app).

---

## Bước 2: Đẩy mã nguồn lên GitHub

* **Tạo repo trên GitHub:** đặt tên theo mục tiêu (user site hay project site).
* **Khởi tạo Git & push:**
  ```
  git init
  git add .
  git commit -m "Initial Blazor WASM"
  git branch -M main
  git remote add origin https://github.com/<username>/<repo>.git
  git push -u origin main
  ```

---

## Bước 3: Cấu hình cho GitHub Pages (base href, .nojekyll, 404)

#### Base href cho Blazor

* **User site ([username.github.io]()):** không cần đổi, giữ nguyên `<base href="/" />` trong `wwwroot/`[`index.html`](https://index.html).
* **Project site (username.github.io/repo-name):** cần base href thành `"/repo-name/"`.
  * **Cách đơn giản khi publish:**

    ```
    dotnet publish -c Release -p:UseAppHost=false -p:StaticWebAssetBasePath=/repo-name
    ```

    * Tham số `StaticWebAssetBasePath` sẽ đặt đúng base path cho assets.
  * **Hoặc sửa tay sau publish:** mở `publish/wwwroot/`[`index.html`](https://index.html) và chỉnh `<base href="/repo-name/" />`.

#### Tạo .nojekyll

* **Lý do:** Blazor tạo thư mục `_framework/`, GitHub Pages có thể chặn nếu không có `.nojekyll`.
* **Thực hiện:** tạo file rỗng tên `.nojekyll` trong thư mục deploy (`_site`).

#### Xử lý routing SPA với [404.html]()

* **Lý do:** GitHub Pages là static, các route như `/counter` sẽ 404 nếu không có fallback.
* **Giải pháp nhanh:** sao chép [`index.html`](https://index.html) thành [`404.html`](https://404.html) khi deploy để mọi route fallback về app.
  * Bạn có thể tự động hóa trong workflow bằng lệnh copy file.

---

## Bước 4: Thiết lập GitHub Actions để build và deploy

Tạo file `.github/workflows/`[`deploy.yml`](https://deploy.yml) trong repo với nội dung sau (chuẩn cho user site, đã sửa lỗi không tạo nhánh `gh-pages`, sai base path, và fallback routing):

```
name: Deploy Blazor WASM to GitHub Pages

on:
  push:
    branches: [ master ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    environment:
      name: github-pages
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup .NET
        uses: actions/setup-dotnet@v4
        with:
          dotnet-version: '8.0.x'
      - name: Publish
        run: |
          dotnet restore
          dotnet publish -c Release -p:UseAppHost=false
          PUBLISH_DIR=$(find . -path "*/bin/Release/*/publish/wwwroot" -type d | head -n 1)
          echo "Publish dir: $PUBLISH_DIR"
          mkdir -p ./_site
          cp -r "$PUBLISH_DIR/"* ./_site/

      - name: Add .nojekyll and 404.html
        run: |
          touch ./_site/.nojekyll
          cp ./_site/index.html ./_site/404.html

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./_site

      - name: Deploy to GitHub Pages
        uses: actions/deploy-pages@v4
```

* **Chú ý quan trọng:**
  * Nếu bạn dùng kiểu project site, hãy thêm lại `-p:StaticWebAssetBasePath=/REPO_NAME` vào lệnh publish.
  * Đảm bảo file [`index.html`](https://index.html) nằm trực tiếp trong `./_site`, không nằm trong `./_site/wwwroot`.

---

## Bước 5: Bật GitHub Pages

* **Vào Settings > Pages** của repo.
* **Build and deployment:** chọn **GitHub Actions** làm nguồn.
* **Lưu lại:** chờ vài phút để GitHub Pages build.

---

## Bước 6: Kiểm tra và khắc phục sự cố

* **Truy cập site:**
  * **User site:** `https://<username>.`[`github.io`](https://github.io)
  * **Project site:** `https://<username>.`[`github.io/`](https://github.io/)`<repo-name>/`
* **Nếu assets không tải được:**
  * **Sai base path:** kiểm tra `<base href>` hoặc `StaticWebAssetBasePath`.
* **Nếu route nội bộ (Counter/FetchData) bị 404:**
  * **Thiếu fallback:** đảm bảo [`404.html`](https://404.html) tồn tại và đã copy từ [`index.html`](https://index.html).
* **Nếu thư mục `_framework` bị chặn:**
  * **Thiếu `.nojekyll`:** kiểm tra file `.nojekyll` trong `_site`.

---

## Tuỳ chọn: Domain riêng và HTTPS

* **Custom domain:** vào Settings > Pages > Custom domain, thêm domain của bạn. Cập nhật DNS (CNAME về `<username>.`[`github.io`](https://github.io)).
* **CNAME file:** GitHub sẽ tự tạo trong môi trường deploy; không cần tự thêm trừ khi muốn cố định.
* **HTTPS:** bật “Enforce HTTPS” trong Settings > Pages.

---
