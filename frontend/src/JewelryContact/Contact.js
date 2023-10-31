import React from "react";
import Header from "../HeaderJewelry";
import BiaContact from "../../src/assets/img/Bìa/BìaContact.png";
import LogoFooter from "../../src/assets/img/LOGO/katlogo.png";
import Img1 from "../../src/assets/img/ImgContact/ImgContact1.png";
import Img2 from "../../src/assets/img/ImgContact/ImgContact2.png";
import Img3 from "../../src/assets/img/ImgContact/ImgContact3.png";
import Img4 from "../../src/assets/img/ImgContact/ImgContact4.png";
import Img5 from "../../src/assets/img/ImgContact/ImgContact5.png";
import "./Contact.css";
import Footer from "../FooterJewelry/Footer";

function Contact({ username, onLogout }) {
  return (
    <div>
      <div id="main">
        <div id="header">
          <Header onLogout={onLogout} username={username} />
        </div>

        <div id="slider">
          <img src={BiaContact} alt="" />
        </div>

        <div id="contentContact">
          <div className="Header1">
            <h2 className="HeaderContent">
              -- Hãy luôn độc nhất và khác biệt --
            </h2>
            <h3 className="HeaderContent">
              Hotline: <a>089.6162.868</a>
            </h3>
            <h3 className="HeaderContent">Email: contact@D-Luxury.vn</h3>
          </div>

          <div className="Certification">
            <p>
              <i class="fa-solid fa-check"></i> Thương hiệu đã được đăng kí bởi
              cục sở hữu trí tuệ và được bảo hộ bởi pháp luật Việt Nam
            </p>
            <p>
              <i class="fa-solid fa-check"></i> HOÀN TIỀN GẤP 5 LẦN nếu bạc
              không đủ tiêu chuẩn 925, hỗ trợ khách kiểm định (tính phí)
            </p>
            <p>
              <i class="fa-solid fa-check"></i> Chất lượng được chứng minh bởi
              hơn 150.000 khách hàng trong 10 năm qua!
            </p>
            <p>
              <i class="fa-solid fa-check"></i> Hãy chọn cho mình 1 thương hiệu
              trang sức bạc 925 uy tín và lâu đời để chắc rằng trang sức của bạn
              được bảo hành trắng sáng MIỄN PHÍ VĨNH VIỄN.
            </p>
          </div>

          <div className="Certification2">
            <h3>D-LUXURY CÓ 12 CỬA HÀNG</h3>
            <p>--------- 10 Cửa Hàng Tại TP HỒ CHÍ MINH ---------</p>
            <p>1. D-Luxury Q1: 450 Hai Bà Trưng, P. Tân Định, Quận 1</p>
            <p>2. D-Luxury Q3: 678 Nguyễn Đình Chiểu, P.3, Quận 3</p>
            <p>
              3. D-Luxury quận 3: 179B Cách mạng tháng 8, P. 5, Q. 3. (Đoạn giữa
              Nguyễn Đình Chiểu và Võ Văn Tần).
            </p>
          </div>

          <div className="ImgContact">
            <img src={Img1} alt="" />
          </div>

          <div className="Certification2">
            <p>4. D-Luxury Phú Nhuận: 99 Lê Văn Sỹ, P. 14, Q. Phú Nhuận.</p>
            <p>
              5. D-Luxury Nguyễn Trãi Q5: 213A Nguyễn Trãi, P2, Quận 5 (giữa Lê
              Hồng Phong và Huỳnh Mẫn Đạt).
            </p>
          </div>

          <div className="ImgContact">
            <img src={Img2} alt="" />
          </div>

          <div className="Certification2">
            <p>
              6. D-Luxury Gò Vấp: 529 Quang Trung, P. 10, Q. Gò Vấp (Đoạn gần
              Thống Nhất).
            </p>
          </div>

          <div className="ImgContact">
            <img src={Img3} alt="" />
          </div>

          <div className="Certification2">
            <p>
              7. D-Luxury Tân Phú: 117 Cây Keo, Phường Hiệp Tân, Quận Tân Phú
              (song song đường Hòa Bình).
            </p>
          </div>

          <div className="ImgContact">
            <img src={Img4} alt="" />
          </div>

          <div className="Certification2">
            <p>
              8. D-Luxury D2: 197 Nguyễn Gia Trí (D2), Phường 25, Quận Bình
              Thạnh.
            </p>
            <p>
              9. D-Luxury Q7: 391 Nguyễn Thị Thập, Phường Tân Phong, Quận 7.
            </p>
            <p>
              10. D-Luxury Thủ Đức: 215 Võ Văn Ngân, Phường Linh Chiểu, Quận Thủ
              Đức, Tp Thủ Đức.
            </p>
          </div>

          <div className="Certification3">
            <p>--------- 1 Cửa Hàng Tại ĐÀ NẴNG ---------</p>
            <p>11. D-Luxury Lê Duẩn: 230 Lê Duẩn, Q. Thanh Khê</p>
            <p>--------- 1 Cửa Hàng Tại HÀ NỘI ---------</p>
            <p>
              12. D-Luxury Hoàn Kiếm: 52 Tràng Thi, P. Hàng Bông, Q. Hoàn Kiếm.
              (Ngay góc Hội Vũ - Tràng Thi). Sđt: <a>0975.700.500</a>
            </p>
          </div>

          <div className="ImgContact">
            <img src={Img5} alt="" />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default Contact;
