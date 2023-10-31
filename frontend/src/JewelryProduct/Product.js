import "./Product.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../HeaderJewelry";
import { useNavigate } from "react-router-dom";
import Ip from "../Ip"
function Product({ username, onLogout }) {
  const [term, setTerm] = useState('');

  const handleInputChange = (event) => {
    setTerm(event.target.value);
  };
  const navigate = useNavigate();
  const handleNavigate = (id) => {
    navigate("/product-detail", { state: { id } });
  };

  const [product, setProduct] = useState([]);
  const [product1, setProduct1] = useState([]);
  const [product2, setProduct2] = useState([]);
  const [product3, setProduct3] = useState([]);

  useEffect(() => {
    // Sử dụng Axios để lấy dữ liệu sản phẩm từ API
    axios
      .get(`http://${Ip}:8080/ProjectSJ/Product/all`)
      .then((response) => {
        console.log(response);

        const dataProduct = response.data;
        const dataProduct1 = response.data;
        const dataProduct3 = response.data;
        const dataProduct2 = response.data;

        const filteredProducts = dataProduct.filter((product) => product.material === 'sach');
        const filteredProducts1 = dataProduct1.filter((product) => product.material === 'aoquan');
        const filteredProducts2 = dataProduct2.filter((product) => product.material === 'noithat');
        const filteredProducts3 = dataProduct3.filter((product) => product.material === 'dientu');

        const sortedProducts = filteredProducts.sort((a, b) => b.price - a.price);
        const sortedProducts1 = filteredProducts1.sort((a, b) => b.price - a.price);
        const sortedProducts2 = filteredProducts2.sort((a, b) => b.price - a.price);
        const sortedProducts3 = filteredProducts3.sort((a, b) => b.price - a.price);

        const topProducts = sortedProducts.slice(0, 3);
        const topProducts1 = sortedProducts1.slice(0, 3);
        const topProducts2 = sortedProducts2.slice(0, 3);
        const topProducts3 = sortedProducts3.slice(0, 3);

        setProduct(topProducts);
        setProduct1(topProducts1);
        setProduct2(topProducts2);
        setProduct3(topProducts3);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <div id="main">
        <div id="header">
          <Header onLogout={onLogout} username={username} />
        </div>
        <div id="contenthome">
          <div className="gadian">
            <div>
              <h1 className="title1">Đồ cũ, giá trị mới</h1>
            </div>
            <div className="search-bar">
              <input
                type="text"
                placeholder="Tìm kiếm sản phẩm tại đây"
                value={term}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div>
            <h1 className="title2">Ở đây chúng mình có:</h1>
          </div>
          <div className="content-head">
            <div className="content-title">
              <h2 className="title">- Sách, tài liệu học tập</h2>
            </div>
            <div className="content-list-product">
              {product.map((item) => (
                <div className="product" key={item.id}>
                  <div
                    className="content-product"
                    onClick={() => handleNavigate(item.id)}
                  >
                    <div className="HP-product-image">
                      <img
                        src={`data:image/png;base64,${item.base64}`}
                        alt=""
                      />
                    </div>
                    <div className="product-body">
                      <p className="product-heading">{item.productname}</p>
                      <p className="product-price-after">
                        {/* {Math.floor(item.price).toLocaleString("vi-VN")}đ */}
                        {item.price}đ
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="content-title">
              <h2 className="title">- Áo quần</h2>
            </div>
            <div className="content-list-product">
              {product1.map((item) => (
                <div className="product" key={item.id}>
                  <div
                    className="content-product"
                    onClick={() => handleNavigate(item.id)}
                  >
                    <div className="HP-product-image">
                      <img
                        src={`data:image/png;base64,${item.base64}`}
                        alt=""
                      />
                    </div>
                    <div className="product-body">
                      <p className="product-heading">{item.productname}</p>
                      <p className="product-price-after">
                        {/* {Math.floor(item.price).toLocaleString("vi-VN")}đ */}
                        {item.price}đ
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="content-title">
              <h2 className="title">- Nội thất</h2>
            </div>
            <div className="content-list-product">
              {product2.map((item) => (
                <div className="product" key={item.id}>
                  <div
                    className="content-product"
                    onClick={() => handleNavigate(item.id)}
                  >
                    <div className="HP-product-image">
                      <img
                        src={`data:image/png;base64,${item.base64}`}
                        alt=""
                      />
                    </div>
                    <div className="product-body">
                      <p className="product-heading">{item.productname}</p>
                      <p className="product-price-after">
                        {/* {Math.floor(item.price).toLocaleString("vi-VN")}đ */}
                        {item.price}đ
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="content-title">
              <h2 className="title">- Điện tử</h2>
            </div>
            <div className="content-list-product">
              {product3.map((item) => (
                <div className="product" key={item.id}>
                  <div
                    className="content-product"
                    onClick={() => handleNavigate(item.id)}
                  >
                    <div className="HP-product-image">
                      <img
                        src={`data:image/png;base64,${item.base64}`}
                        alt=""
                      />
                    </div>
                    <div className="product-body">
                      <p className="product-heading">{item.productname}</p>
                      <p className="product-price-after">
                        {/* {Math.floor(item.price).toLocaleString("vi-VN")}đ */}
                        {item.price}đ
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
