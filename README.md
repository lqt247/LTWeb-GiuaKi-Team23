<<<<<<< HEAD
<h1 align="center" > ⚙️ Đồ án Giữa Kì - Team 23</h1>
=======
<h1 align="center" > ⚙️ Đồ án Giữa Kì - Team 22</h1>
>>>>>>> main
<p align="center">
  <b>Môn học:</b> Lập trình Web · 
  <b>Giảng viên hướng dẫn:</b> Phan Đình Long  
</p>

## <p align="center">**Website bán dụng cụ học tập STEM cho trẻ em** </p> 
### 💡 Mục tiêu cuối cùng
>**Tạo ra:** một website thân thiện với người dùng, sinh động và mang tính chuyên nghiệp dựa trên kiến thức đã được học.   
> **Đúc kết:** Hiểu và hiện thực 1 trang web hoàn chỉnh.  
> **Kiến thức:** Thành thạo và hiểu rõ các ngôn ngữ: HTML, CSS, JS - Các câu lệch và thao tác kết nói với Database: MySQL.  
> **ĐẠT KẾT QUẢ CAO - 10Đ** 

## 👥 Thành viên nhóm

| Họ tên | MSSV | GitHub |
|:-------|:---------|:--------|
| Lê Quang Trường | 23130355 | [@lqt247](https://github.com/lqt247) |
| Phan Văn Thi | 23130309 | [@thiphan2301 ](https://github.com/thiphan2301) |
| Nguyễn Thanh Tuấn | 20130456 | [@thanhtuan2701](https://github.com/thanhtuan2701) |

## ⚙️ YÊU CẦU CHUNG VỀ CODE
### 🧭 MỤC TIÊU CHUNG
- Code **dễ đọc, dễ hiểu, dễ bảo trì**, ai cũng nắm rõ phần mình làm.
- Cấu trúc dự án **rõ ràng**, dễ mở rộng khi phát triển thêm tính năng.
- Sử dụng **cú pháp BEM** cho class nha.

- FONTS: **lấy và sử dụng ở trang:** https://fonts.google.com/ => import vào fonts.css

#### 💻 HTML

**Yêu cầu:**
- Tất cả trang `.html` **sử dụng chung Header và Footer** để đồng nhất giao diện.  
- Dùng **HTML5 semantic tags** (`header`, `nav`, `main`, `section`, `article`, `footer`, ...) để cấu trúc nội dung rõ ràng.  
- **Không dùng `float`** — thay bằng **Flexbox hoặc CSS Grid** cho bố cục hiện đại.  
- Ghi **comment rõ ràng** để người khác dễ hiểu phần code:

#### 🎨 CSS

**Nguyên tắc chung:**
- Dùng **quy tắc đặt tên BEM** (Block – Element – Modifier) để dễ hiểu, dễ mở rộng.
  ```css
  .card {}            /* Block */
  .card__image {}     /* Element */
  .card--highlight {} /* Modifier */

  /* Ví dụ: Thẻ sản phẩm trong trang Shop */

  /* Block – đại diện cho một khối độc lập */
  .product-card {
    background-color: #fff;
  }

  /* Element – phần tử con nằm trong block */
  .product-card__image {
    width: 100%;
  }

  .product-card__title {

  }

  .product-card__price {

  }

  /* Modifier – biến thể của block (ví dụ: sản phẩm nổi bật) */
  .product-card--featured {
  
  }


- Tất cả .html nên dùng 1 file **style.css** (duy nhất).


## 📋 Bảng Task

**Bảng Task của nhóm** tại link dưới đây:  

[📋 - Bảng Task Team 22](https://docs.google.com/spreadsheets/d/1wz3HGwNG3Q0sIKK-cX_u41N2N5kKUkCvMzlcieURk8U/edit?usp=sharing)


## 📝 Mô tả 
Đây là repo chứa toàn bộ mã nguồn và tài liệu của đồ án giữa kì môn Lập trình Web – được thực hiện bởi Team 22 dưới sự hướng dẫn của thầy Phan Đình Long.

Dự án được xây dựng với mục tiêu vận dụng các kiến thức đã học về HTML, CSS, JavaScript, MySQL để tạo nên một website hoàn chỉnh, có giao diện thân thiện, sinh động và mang tính thực tế cao.

Sản phẩm cuối cùng là Website bán dụng cụ học tập STEM cho trẻ em,
giúp người dùng có thể xem – tìm kiếm – đặt mua sản phẩm, đồng thời khám phá thêm kiến thức STEM thông qua các bài viết và hướng dẫn học tập.

Dự án không chỉ giúp nhóm nâng cao kỹ năng lập trình web, mà còn hiểu rõ quy trình xây dựng một ứng dụng web thực tế – từ khâu lên ý tưởng, thiết kế giao diện, kết nối cơ sở dữ liệu, đến triển khai và kiểm thử sản phẩm.

Mục tiêu: Hoàn thiện sản phẩm đúng tiến độ, hoạt động ổn định, giao diện đẹp – hướng tới điểm 10 tuyệt đối cho đồ án giữa kì. KAKA


## Cấu trúc thư mục

- LTWeb_GiuaKi_Nhom23-Shop_Steam/  
  - src/
    - index.html → Trang chủ
    - main/
      - **about.html** → Giới thiệu về STEM & nhóm phát triển
      - **contact.html** → Liên hệ
      - faq.html → Câu hỏi thường gặp (footer)
      - policy.html → Chính sách bảo hành / đổi trả (footer)
      - terms.html → Điều khoản sử dụng (footer)
    - shop/
        - **shop.html** → Danh sách sản phẩm
        - category.html → Danh mục sản phẩm
        - product-detail.html → Chi tiết sản phẩm
        - **cart.html** → Giỏ hàng
        - **wishlist.html** → Danh sách yêu thích
        - checkout.html → Thanh toán
    - user/
      - **sign-in.html** → Đăng nhập
      - **sign-up.html** → Đăng ký
      - forgot-password.html → Quên mật khẩu
    - content/
      - **blog.html** → Danh sách bài viết
      - blog-detail.html → Chi tiết bài viết
      - gallery.html → Bộ sưu tập hình ảnh
    - workshop/
        - events.html → Sự kiện, Workshop STEM
        - rate.html → Đánh giá khách hàng
    - assets/
      - css/ → Các file CSS
        - style.css  → file CSS: nó để CSS những cái chung chung
        - fonts.css  → Khai báo font ở đây //Down font đặt biệt// Thông thường dùng gg font cho nhanh.
        - base.css
        - layout.css
        - component.css
        - pages/   → file CSS: css riêng từng trang -> sau đó link vào .html
        - style.css  → file CSS chính -> điều hướng tới các file css sau.
        - base.css
        - layout.css
        - component.css
        - pages/ 
          - ???.css
          - ???.css
          - ???.css
          - ???.css

      - js/ → Các file JavaScript
      - images/ → Hình ảnh sản phẩm, banner
      - fonts/ → Font chữ sử dụng
      - data/ → File dữ liệu giả lập (JSON)
  - README.md → Tài liệu mô tả dự án

## 🧩 Mô tả dự án

### 🔍 Giới thiệu

**STEM** là viết tắt của bốn lĩnh vực chính:

| Chữ cái | Nghĩa tiếng Anh | Nghĩa tiếng Việt |
|:--------|:----------------|:----------------|
| **S** | Science | Khoa học |
| **T** | Technology | Công nghệ |
| **E** | Engineering | Kỹ thuật |
| **M** | Mathematics | Toán học |

Giáo dục STEM hướng đến việc giúp học sinh **học thông qua trải nghiệm thực tế**,  
rèn luyện khả năng **tư duy logic**, **sáng tạo** và **giải quyết vấn đề**.  

**Đồ chơi** hoặc **dụng cụ học tập** STEM là các sản phẩm giúp trẻ **vừa chơi vừa học**,  
thông qua việc **lắp ráp, thí nghiệm, lập trình và khám phá khoa học**.

Đồ chơi STEAM thực chất là 1 phần của dụng cụ học tập STEAM. Giúp các bạn nhỏ tích cực học hỏi tìm hiểu hơn.

---

### 🛒 Mục tiêu của dự án

Dự án **Website bán dụng cụ học tập STEM cho trẻ em** được xây dựng:

-  **Cung cấp** các sản phẩm, thiết bị và bộ kit STEM chất lượng dành cho học sinh tiểu học & THCS.  
-  **Hỗ trợ phụ huynh, giáo viên và học sinh** dễ dàng tìm kiếm, lựa chọn và mua sắm sản phẩm mang tính sáng tạo.  
-  **Tạo ra môi trường học tập trực tuyến thú vị**, nơi người dùng có thể vừa học vừa thực hành kiến thức khoa học – công nghệ.

---

### ⚙️ Demo các chức năng cơ bản

Người dùng có thể thực hiện các tính năng cơ bản sau:

| Biểu tượng | Chức năng | Mô tả |
|:-----------:|:-----------|:------|
| 🔎 | **Tìm kiếm sản phẩm** | Lọc và tìm sản phẩm cần mua theo danh mục (Robot, Arduino, Cảm biến, v.v.) |
| 🛍️ | **Giỏ hàng và Thanh toán** | Thêm sản phẩm, xử lý đơn hàng, thanh toán online |
| 🧠 | **Blog STEM** | Đọc bài hướng dẫn và hoạt động thực hành tại nhà |
| 👤 | **Quản lý tài khoản** | Xem thông tin cá nhân, lịch sử mua hàng |
| 💬 | **Đánh giá sản phẩm** | Bình luận và góp ý cho các sản phẩm đã mua |

---

## 💡 Ghi chú
Mọi thay đổi cần được thực hiện qua Pull Request.  
Sẽ cập nhật thêm. - Trong file báo cáo .doc
