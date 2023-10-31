import LogoFooter from "../../src/assets/img/LOGO/LogoFooter.png";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <div id="footer">
        <div className="footer-info logoFooter ">
          <img src={LogoFooter} alt="" />
        </div>

        <div className="footer-info center">
          <h3 className="info-store-head text">JEWELRY STORE IN SAIGON</h3>
        </div>

        <div className="footer-info-head">
          <div className="footer-info center">
            <h3 className="info-store text">DESIGN & MADE TO ORDER</h3>
            <h3 className="info-store text">Since 2012</h3>
          </div>
        </div>

        <div className="footer-info-end">
          <div className="footer-address center">
            <p className="info-address">TP Hồ Chí Minh</p>
            <p className="info-address">450 Hai Bà Trưng, Quận 1</p>
          </div>

          <div className="footer-address center">
            <p className="info-address">Đà Nẵng</p>
            <p className="info-address">230 Lê Duẫn, Thanh Khê, Đà Nẵng</p>
          </div>

          <div className="footer-address center">
            <p className="info-address">Hà Nội</p>
            <p className="info-address">
              52 Tràng Thi, P.Hàng Bông, Q.Hoàn Kiếm
            </p>
          </div>
        </div>

        <div className="footer-address center">
          <p className="info-address-end">
            © Bản quyền thuộc về D-Luxury | Cung cấp bởi
            <a href=""> D-Luxury</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
