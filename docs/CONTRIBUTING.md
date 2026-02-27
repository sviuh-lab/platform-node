# Contributing – SVIUH Startup Lab

Tài liệu này dành cho **sinh viên tham gia Startup Lab**.

---

## 🧑‍💻 Quy trình chuẩn

### 1️⃣ Fork repository
- Fork repo backend mẫu về GitHub cá nhân / nhóm
- Không commit trực tiếp vào repo gốc

---

### 2️⃣ Đổi thông tin dự án
- Đổi tên repo
- Cập nhật `package.json`
- Cập nhật README cho đề tài của bạn

---

### 3️⃣ Phát triển chức năng
- Thêm routes trong `src/routes`
- Tách logic ra `controllers` / `services`
- Không viết tất cả vào một file

---

### 4️⃣ Deploy
- Deploy repo fork của bạn lên Google Cloud Run
- Mỗi đề tài = **1 Cloud Run service riêng**

---

### 5️⃣ Subdomain
Sau khi deploy ổn định:
- Gửi tên service cho admin Lab
- Được cấp subdomain dạng: api.[ten-de-tai].lab.sviuh.net

---

## 🚫 Những điều KHÔNG làm
- Không sửa repo gốc
- Không dùng chung service
- Không hard-code secret / key

---

## 🎯 Mục tiêu cuối
- Có **API chạy thật**
- Có **URL public**
- Có thể demo cho:
- giảng viên
- nhà đầu tư
- cuộc thi đổi mới sáng tạo
- và khởi nghiệp

---

Chúc bạn build được một sản phẩm đáng tự hào 🚀

