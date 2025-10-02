# Hugo Blog Skeleton (Vietnamese)

Một skeleton **Hugo** tối giản (không phụ thuộc theme ngoài) — chỉ cần copy/paste, viết bài và deploy GitHub Pages.

## 🚀 Chạy local
1. Cài Hugo: https://gohugo.io/installation/
2. Clone/giải nén project này, rồi chạy:
   ```bash
   hugo server -D
   ```
   Truy cập http://localhost:1313 để xem thử.

## ✍️ Viết bài
Tạo bài mới:
```bash
hugo new posts/ten-bai-viet.md
```
Mở file trong `content/posts/`. Đổi `draft: false` để hiển thị.

## 🔧 Cấu hình nhanh
- Sửa `hugo.toml`:
  - `baseURL = "https://YOUR_USERNAME.github.io/"` hoặc domain riêng
  - `title`, `params.author`, `params.description`

## 🌐 Deploy GitHub Pages (gh-pages)
1. Tạo repo mới (public) trên GitHub. Push toàn bộ mã nguồn lên branch `main`:
   ```bash
   git init
   git add .
   git commit -m "init hugo skeleton"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```
2. GitHub Actions: Skeleton đã có sẵn workflow. Mở tab **Actions** -> bật workflows.
3. Sau khi workflow chạy xong, vào **Settings → Pages**:
   - **Source**: chọn **Deploy from a branch**
   - **Branch**: `gh-pages` (root)
4. Mở `https://YOUR_USERNAME.github.io/` để xem site.
   - Nếu dùng custom domain, tạo file `static/CNAME` chứa tên miền (VD: `blog.tenban.com`), bật HTTPS trong Pages.

## 🧩 Cấu trúc thư mục
- `content/` — bài viết Markdown
- `layouts/` — template tối giản (base, list, single)
- `assets/css/style.css` — stylesheet
- `static/robots.txt` — robots
- `.github/workflows/hugo.yml` — build & deploy
- `archetypes/default.md` — front matter mặc định

## 🛠️ Tuỳ chỉnh
- Thêm Google Analytics/ Plausible vào `layouts/partials/head.html`
- Tuỳ biến style tại `assets/css/style.css`
- Sửa/ mở rộng layout trong `layouts/`

Chúc bạn viết blog thật vui! ✨
