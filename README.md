## Thông tin sinh viên
Nguyễn Mạn Toàn - 23810310262

## Mô tả chức năng

Ứng dụng thương mại điện tử được xây dựng bằng React Native với các tính năng chính:

###  Authentication & Storage
- Đăng nhập với AsyncStorage để lưu trữ token và thông tin user
- Tự động đăng xuất sau 30 giây không hoạt động
- Lưu trữ persistent cho giỏ hàng và đơn hàng

###  Giỏ hàng & Đặt hàng
- Thêm/xóa sản phẩm vào giỏ hàng
- Lưu giỏ hàng vào AsyncStorage
- Quy trình checkout và xác nhận đơn hàng
- Lịch sử đơn hàng

###  Tài khoản người dùng
- Màn hình profile với thông tin cá nhân
- Điều hướng bottom menu
- Đăng xuất

###  Giao diện
- UI/UX hiện đại với các popup và modal
- Responsive design
- Icons và hình ảnh minh họa

## Hướng dẫn chạy app

### Yêu cầu hệ thống
- Node.js >= 14
- npm hoặc yarn
- Expo CLI
- Android Studio (cho Android) hoặc Xcode (cho iOS)

### Cài đặt và chạy

1. **Clone repository:**
   ```bash
   git clone https://github.com/NguyenManhToan1105/Baithuchanh20thang4
   cd Baithuchanh11thang4
   ```

2. **Cài đặt dependencies:**
   ```bash
   npm install
   ```

3. **Chạy app:**
   ```bash
   npm start
   # hoặc
   npx expo start
   ```

4. **Chạy trên thiết bị:**
   - Quét QR code bằng Expo Go app trên điện thoại
   - Hoặc chạy trên simulator/emulator

### Các tính năng chính
- Đăng nhập → Màn hình chính với sản phẩm
- Thêm sản phẩm vào giỏ hàng
- Checkout → Xác nhận đơn hàng
- Xem lịch sử đơn hàng trong Account
### Ảnh minh họa
<img width="1284" height="2778" alt="23010310262_09_ Reload_app_vẫn_còn_đơn_hàng" src="https://github.com/user-attachments/assets/d4093285-f93c-4066-8b00-b2fc98b35ce3" />
<img width="1284" height="2778" alt="23010310262_08_Danh_sách_đơn_hàng" src="https://github.com/user-attachments/assets/8af7aaa8-6d1b-4028-ad4d-398100e44265" />
<img width="1284" height="2778" alt="23010310262_07_Đặt_hàng_thành_công png" src="https://github.com/user-attachments/assets/20f5a70b-589b-4843-b0ff-f9d2917ffebe" />
<img width="1284" height="2778" alt="23010310262_06_Thay_đổi_số_lượng" src="https://github.com/user-attachments/assets/123ca403-a034-44b1-a005-d41813875d6e" />
<img width="1284" height="2778" alt="23010310262_05_Tắt_app→mở_lại_giỏ_vẫn_còn" src="https://github.com/user-attachments/assets/73846a81-1f56-4bc5-b4ec-1d1b2e952303" />
<img width="1284" height="2778" alt="23010310262_04_Thêm_sản_phẩm_vào_giỏ" src="https://github.com/user-attachments/assets/574f58b8-8851-43a9-981b-9576c3958425" />
<img width="1284" height="2778" alt="23010310262_03_Logout → quay về login screen" src="https://github.com/user-attachments/assets/4acf784c-58f6-48a1-8e94-988c290c30f3" />
<img width="1284" height="2778" alt="23810310262_02_Tắt app → mở lại vẫn login" src="https://github.com/user-attachments/assets/349d8071-7614-4650-b2be-1ca72a01c737" />
<img width="1284" height="2778" alt="23810310262_01_Login_thành_công" src="https://github.com/user-attachments/assets/575aa571-6a05-4b42-acb9-e2208d8bfdd4" />


