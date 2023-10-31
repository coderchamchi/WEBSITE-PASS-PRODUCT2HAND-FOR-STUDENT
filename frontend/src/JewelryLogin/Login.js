import React, { useState } from "react";
import isEmpty from "validator/lib/isEmpty";
import { useNavigate } from "react-router-dom";
import Header from "../HeaderJewelry";
import "./Login.css";
import Ip from "../Ip"
function Login({ setUserName }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validationMsg, setValidationMsg] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleClickRegister = () => {
    navigate("/register");
  };

  const onChangeEmail = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  const onChangePassword = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const validateAll = () => {
    const msg = {};
    if (isEmpty(email)) {
      msg.email = "Email không được để trống !";
    }
    // else if (!emailValidator.validate(email)) {
    //   msg.email = "Email không đúng định dạng!";
    // }

    if (isEmpty(password)) {
      msg.password = "Mật khẩu không được để trống !";
    } else if (password.length < 8) {
      msg.password = "Mật khẩu phải có ít nhất 8 kí tự!";
    }

    setValidationMsg(msg);
    if (Object.keys(msg).length > 0) return false;
    return true;
  };

  const onSubmitLogin = () => {
    const isValid = validateAll();
    if (!isValid) return;

    fetch(`http://${Ip}:8080/api/auth/signin`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => {
        return res.json().then((data) => {
          return { response: res, data: data };
        });
      })
      .then(({ response, data }) => {
        if (response.status === 200) {
          if (data && data.username) {
            setUserName(data.username); // Lưu tên người dùng vào state
            navigate("/");
          }
        } else if (response.status === 401) {
          setValidationMsg({
            email: "",
            password: "Email hoặc Mật khẩu đã nhập sai !",
          });
        }
      })
      .catch((err) => console.log("error", err));
  };

  return (
    <>
      <div id="main">
        <div id="header">
          <Header />
        </div>
        <div id="content" className="size">
          <div className="content-section">
            <h2 className="section-heading text">Đăng nhập tài khoản</h2>
          </div>

          <div
            className={`content-form-username pt30px ${
              validationMsg.email ? "error" : ""
            }`}
          >
            <input
              type="username"
              name=""
              placeholder="Email"
              id=""
              className={`form-control-dn ${
                validationMsg.email === "" || validationMsg.email ? "error" : ""
              }`}
              onChange={onChangeEmail}
            />
            <div className="Validate-Notification">
              <p className="Validator">{validationMsg.email}</p>
            </div>
          </div>

          <div
            className={`content-form-pass pt30px ${
              validationMsg.password ? "error" : ""
            }`}
          >
            <input
              type={showPassword ? "text" : "password"}
              name=""
              placeholder="Mật khẩu"
              id=""
              className={`form-control-dn ${
                validationMsg.password ? "error" : ""
              }`}
              onChange={onChangePassword}
            />
            <i
              style={{
                position: "absolute",
                lineHeight: "3.5",
                cursor: "pointer",
                marginLeft:"-25px"
              }}
              className={
                showPassword ? "fa-regular fa-eye" : "fa-regular fa-eye-slash"
              }
              onClick={togglePasswordVisibility}
            ></i>

            <div className="Validate-Notification">
              <p className="Validator">{validationMsg.password}</p>
            </div>
          </div>

          <div className="content-btn-dn pt30px">
            <button onClick={onSubmitLogin} className="form-control-dn text">
              Đăng nhập
            </button>
          </div>

          <div className="content-btn-dk pt30px">
            <a
              href="/register"
              onClick={handleClickRegister}
              className="content-link"
            >
              Đăng ký
            </a>
          </div>
        </div>

      </div>
    </>
  );
}

export default Login;
