import React, { useState } from "react";
import isEmpty from "validator/lib/isEmpty";
import { useNavigate } from "react-router-dom";
import Header from "../HeaderJewelry";
import axios from "axios";
import emailValidator from "email-validator";
import Ip from "../Ip"
function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [birthday, setBirthday] = useState("");
  const [validationMsg, setValidationMsg] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const currentDate = new Date().toISOString().split("T")[0];
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const onChangeEmail = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  const onChangeUsername = (event) => {
    const value = event.target.value;
    setUsername(value);
  };

  const onChangePassword = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  const onChangeDate = (event) => {
    const value = event.target.value;
    setBirthday(value);
  };

  const validateAll = () => {
    const msg = {};
    const regex = /^[a-zA-Z0-9]+$/;

    if (isEmpty(email)) {
      msg.email = "Email không được để trống!";
    } else if (!emailValidator.validate(email)) {
      msg.email = "Email không đúng định dạng!";
    }

    if (isEmpty(username)) {
      msg.username = "Tên tài khoản không được để trống!";
    } else if (username.length < 3 || username.length > 8) {
      msg.username = "Tên tài khoản phải từ 3-8 kí tự!";
    } else if (!regex.test(username)) {
      msg.username = "Tên tài khoản chỉ chứa các ký tự chữ cái, chữ số!";
    }

    if (isEmpty(password)) {
      msg.password = "Mật khẩu không được để trống!";
    } else if (password.length < 8) {
      msg.password = "Độ dài mật khẩu phải trên 8 kí tự!";
    } else if (!regex.test(password)) {
      msg.password = "Mật khẩu chỉ chứa các ký tự chữ cái, chữ số!";
    }

    if (isEmpty(birthday)) {
      msg.birthday = "Ngày sinh không được để trống!";
    }

    setValidationMsg(msg);
    if (Object.keys(msg).length > 0) return false;
    return true;
  };
  const onSubmitRegister = async () => {
    const isValid = validateAll();
    if (!isValid) return;

    const userData = {
      email: email,
      username: username,
      password: password,
      birthday: birthday,
    };

    try {
      const response = await axios.post(
        `http://${Ip}:8080/api/auth/signup`,
        userData
      );
      alert("Đăng ký thành công");
      navigate("/login");

      console.log("Registration successful:", response.data);
    } catch (error) {
      console.error("Registration failed:", error.response.data);
    }
  };

  return (
    <div id="main">
      <div id="header">
        <Header />
      </div>

      <div id="content" className="size">
        <div className="content-section">
          <h2 className="section-heading text">Tạo tài khoản</h2>
        </div>

        <div
          className={`content-form-email pt30px ${
            validationMsg.email ? "error" : ""
          }`}
        >
          <input
            type="email"
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
          className={`content-form-email pt30px ${
            validationMsg.username ? "error" : ""
          }`}
        >
          <input
            type="email"
            name=""
            placeholder="Tên tài khoản"
            id=""
            className={`form-control-dn ${
              validationMsg.username === "" || validationMsg.username
                ? "error"
                : ""
            }`}
            onChange={onChangeUsername}
          />
          <div className="Validate-Notification">
            <p className="Validator">{validationMsg.username}</p>
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
              validationMsg.password === "" || validationMsg.password
                ? "error"
                : ""
            }`}
            onChange={onChangePassword}
          />
          <i
            style={{
              position: "absolute",
              lineHeight: "3.5",
              marginLeft:"-25px",
              cursor: "pointer",
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

        <div
          className={`content-form-pass pt30px ${
            validationMsg.birthday ? "error" : ""
          }`}
        >
          <input
            type="date"
            name=""
            placeholder=""
            id=""
            className={`form-control-dn ${
              validationMsg.birthday === "" || validationMsg.birthday
                ? "error"
                : ""
            }`}
            onChange={onChangeDate}
            max={currentDate}
          />

          <div className="Validate-Notification">
            <p className="Validator">{validationMsg.birthday}</p>
          </div>
        </div>

        <div className="content-btn-dn pt30px">
          <button onClick={onSubmitRegister} className="form-control-dn text">
            Đăng ký
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
