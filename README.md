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
