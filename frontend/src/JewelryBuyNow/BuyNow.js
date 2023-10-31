import "./BuyNow.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../HeaderJewelry";
import Footer from "../FooterJewelry/Footer";
import isEmpty from "validator/lib/isEmpty";
import IconVoucher from "../../src/assets/img/ICON/voucherIcon.png";
import DeliveryIcon from "../../src/assets/img/ICON/DeliveryIcon.png";
import MoneyIcon from "../../src/assets/img/ICON/MoneyIcon.png";
import { useLocation } from "react-router-dom";

function BuyNow({ username, onLogout }) {
  const location = useLocation();
  const productId = location.state?.id;
  const selectedSize = location.state?.selectedSize;
  const countDetails = location.state?.count;
  const totalPrice = location.state?.totalPrice;
  const [count, setCount] = useState(countDetails);
  const [newTotalPrice, setNewTotalPrice] = useState(Math.floor(totalPrice));

  const updatePrice = (newCount) => {
    if (product) {
      const newProvisionalTotalPrice = Math.floor(product.price * newCount);
      setNewTotalPrice(newProvisionalTotalPrice);
      localStorage.setItem("newTotalPrice", newProvisionalTotalPrice);
      localStorage.setItem("newCount", newCount);
    }
  };

  const Up = () => {
    if (count < 100) {
      setCount(count + 1);
      updatePrice(count + 1);
    }
  };

  const Down = () => {
    if (count > 1) {
      setCount(count - 1);
      updatePrice(count - 1);
    }
  };

  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [district, setDistrict] = useState("");
  const [ward, setWard] = useState("");
  const [validationMsg, setValidationMsg] = useState("");
  const [product, setProduct] = useState(null);

  const validateAll = () => {
    const msg = {};
    if (isEmpty(phone)) {
      msg.phone = "Không được để trống thông tin !";
    }

    if (isEmpty(address)) {
      msg.address = "Không được để trống thông tin !";
    }

    if (isEmpty(district)) {
      msg.district = "Không được để trống thông tin !";
    }

    if (isEmpty(ward)) {
      msg.ward = "Không được để trống thông tin !";
    }
    setValidationMsg(msg);
    if (Object.keys(msg).length > 0) return false;
    return true;
  };
  const onSubmitOrder = () => {
    const isValid = validateAll();
    if (!isValid) return;
  };

  useEffect(() => {
    const storedNewTotalPrice = localStorage.getItem("newTotalPrice");
    const storedNewCount = localStorage.getItem("newCount");

    if (productId) {
      axios
        .get(`https://fakestoreapi.com/products/${productId}`)
        .then((response) => {
          const dataProduct = response.data;
          setProduct(dataProduct);
          const initialProvisionalTotalPrice = Math.floor(
            dataProduct.price * countDetails
          );
          console.log(initialProvisionalTotalPrice);

          if (storedNewTotalPrice) {
            setNewTotalPrice(Number(storedNewTotalPrice));
          }

          if (storedNewCount) {
            setCount(Number(storedNewCount));
          }
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [productId, countDetails]);

  return (
    <div>
      <div id="main">
        <div id="header">
          <Header onLogout={onLogout} username={username} />
        </div>

        <div id="contentBuy">
          <div className="BuyHeader">
            <div className="NameHeader">
              <h3>Thanh toán</h3>
            </div>
          </div>

          <div className="contentBuy2">
            <div className="BuyInfo">
              <div className="InfoImg">
                {/* <img src={`data:image/png;base64,${product?.base64}`} alt="" /> */}
                <img src={product?.image} alt="" />
              </div>
              <div className="Info">
                <div className="InfoName">
                  <div className="IName">{product?.title}</div>

                  <div className="ISize">Size: {selectedSize}</div>
                  <div className="ISize">Số lượng:</div>
                  <div className="IQuantity">
                    <div className="Quanti1">
                      <p onClick={Down}>-</p>
                    </div>
                    <div className="Quanti2">
                      <p>{count}</p>
                    </div>
                    <div className="Quanti3">
                      <p onClick={Up}>+</p>
                    </div>
                  </div>
                </div>
                <div className="InfoPrice">
                  <div>
                    <p>{Math.floor(product?.price).toLocaleString("vi-VN")}đ</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="BuyPay">
              <div className="Pay1">
                <div className="provisional">
                  <p>Tạm tính ({count} sản phẩm)</p>
                </div>
                <div className="provisionalPrice">
                  <p>{Math.floor(newTotalPrice).toLocaleString("vi-VN")}đ</p>
                </div>
              </div>
              <div className="Pay2">
                <div className="voucher-icon">
                  <img src={IconVoucher} alt="" />
                  <p> Mã giảm giá của shop</p>
                </div>
                <div className="voucher">
                  <p>Giảm 10k</p>
                </div>
              </div>
              <div className="Pay2">
                <div className="voucher-icon">
                  <img src={DeliveryIcon} alt="" />
                  <p> Phí giao hàng</p>
                </div>
                <div className="provisionalPrice">
                  <p>25.000đ</p>
                </div>
              </div>
              <div className="Pay2">
                <div className="voucher-icon">
                  <img src={MoneyIcon} alt="" />
                  <p> Phương thức thanh toán</p>
                </div>
                <div className="provisionalPrice">
                  <p>Thanh toán khi nhận hàng</p>
                </div>
              </div>
            </div>

            <div className="BuyTopic">
              <h3>Nhập địa điểm nhận hàng</h3>
            </div>

            <div className="Enter-information">
              <div
                className={`Enter-Add ${validationMsg.phone ? "error" : ""}`}
              >
                <input
                  type="text"
                  placeholder="Số điện thoại*"
                  className={validationMsg.phone ? "error" : ""}
                  onChange={(e) => setPhone(e.target.value)}
                ></input>
                <div className="Validate-Notification-BuyNow">
                  <p className="Validator-BuyNow">{validationMsg.phone}</p>
                </div>
              </div>

              <div
                className={`Enter-Add ${validationMsg.address ? "error" : ""}`}
              >
                <input
                  type="text"
                  placeholder="Địa chỉ*"
                  className={validationMsg.address ? "error" : ""}
                  onChange={(e) => setAddress(e.target.value)}
                ></input>
                <div className="Validate-Notification-BuyNow">
                  <p className="Validator-BuyNow">{validationMsg.address}</p>
                </div>
              </div>

              <div
                className={`Enter-Add ${validationMsg.district ? "error" : ""}`}
              >
                <input
                  type="text"
                  placeholder="Quận/ Huyện*"
                  className={validationMsg.district ? "error" : ""}
                  onChange={(e) => setDistrict(e.target.value)}
                ></input>
                <div className="Validate-Notification-BuyNow">
                  <p className="Validator-BuyNow">{validationMsg.district}</p>
                </div>
              </div>

              <div className={`Enter-Add ${validationMsg.ward ? "error" : ""}`}>
                <input
                  type="text"
                  placeholder="Phường*"
                  className={validationMsg.ward ? "error" : ""}
                  onChange={(e) => setWard(e.target.value)}
                ></input>
                <div className="Validate-Notification-BuyNow">
                  <p className="Validator-BuyNow">{validationMsg.ward}</p>
                </div>
              </div>
            </div>

            <div className="BuyOrder">
              <div className="PriceOrder">
                <p>
                  TỔNG TIỀN:{" "}
                  {Math.floor(newTotalPrice + 15000).toLocaleString("vi-VN")}đ
                </p>
              </div>
              <div className="PriceOrder2" onClick={onSubmitOrder}>
                <p>ĐẶT HÀNG</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default BuyNow;
