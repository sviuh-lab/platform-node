# OpenLab Platform – Node Backend Template

Backend mẫu cho **SVIUH Startup Lab**  
Dùng làm nền tảng cho các dự án sinh viên, đổi mới sáng tạo và khởi nghiệp.

---

## 🎯 Mục tiêu
- Cung cấp **backend template hiện đại**
- Deploy sẵn trên **Google Cloud Run**
- Dễ **fork – chỉnh – triển khai** cho từng đề tài sinh viên
- Sử dụng trong môi trường **thực tế**, không phải đồ án mô phỏng

---

## 🧱 Kiến trúc tổng quát

- Backend: **Node.js + Express**
- Cloud: **Google Cloud Run (serverless)**
- CI/CD: **GitHub → Cloud Build**
- Domain mẫu:  
  - API: `https://api.lab.sviuh.net`
  - Frontend: `https://lab.sviuh.net`

---

## 🚀 Chạy local
```bash
npm install
npm run dev
```
Mặc định chạy tại: http://localhost:8080

---

## 👩‍🎓 Dành cho sinh viên – Cách làm đề tài
1. Fork repo này
2. Đổi tên repo theo đề tài
3. Phát triển thêm API cho đề tài của bạn
4. Deploy lên Google Cloud Run
5. Xin cấp subdomain riêng (ví dụ):
    api.netmovie.lab.sviuh.net
    api.edulink.lab.sviuh.net
👉 Mỗi đề tài = 1 service + 1 subdomain

---

## 📦 Deploy (Cloud Run)
Yêu cầu:
  - Repo GitHub
  - Google Cloud project có billing
  - Cloud Run + Cloud Build bật sẵn
Deploy qua Cloud Run → Deploy from GitHub repository
(đã cấu hình sẵn cho template này)

---

## 🧠 Triết lý Lab
Làm sản phẩm chạy thật, dùng cloud thật, theo quy trình thật.

© SVIUH Startup Lab
