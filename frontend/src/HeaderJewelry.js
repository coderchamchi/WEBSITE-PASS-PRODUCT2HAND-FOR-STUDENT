import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = ({ username, onLogout }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [storedUsername, setStoredUsername] = useState("");

  const handleMouseEnter = () => {
    setShowMenu(true);
  };

  const handleMouseLeave = () => {
    setShowMenu(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("username");
    setStoredUsername("");
    onLogout();
  };


  useEffect(() => {
    // Lưu giá trị username vào local storage chỉ một lần khi component được render lần đầu tiên
    if (username) {
      localStorage.setItem("username", username);
    }
    // Lấy giá trị username từ local storage sau khi trang tải
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setStoredUsername(storedUsername);
    }
  }, []);

  return (
    <div id="header">
      <div  className="Logo-Header">
        <img src alt="" />
      </div>
      <div>
        <ul id="nav">
          <li className="Login1">
            <NavLink to="/" exact="true">
              Home
            </NavLink>
          </li>
          <li className="Login2">
            <NavLink to="/product">Sale</NavLink>
          </li>
          <li className="Login3">
            <NavLink to="/information">Notification</NavLink>
          </li>
          <li className="Login4">
            <NavLink to="/contact"><i className="fa fa-shopping-cart"></i></NavLink>
          </li>

          <li
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ position: "relative" }}
          >
            {storedUsername ? (
              <span style={{ padding: "6px", fontSize:"30px", color:"white" }}>{storedUsername}</span>
            ) : (              
                <i className="fa-regular fa-user fs20px" style={{fontSize:"30px", paddingLeft:"10px", paddingRight:"10px", color:"white"}}></i>              
            )}
            {showMenu && storedUsername && (
              <div
                className="dropDown"
                style={{
                  position: "absolute",
                  top: "100%",
                  right: 0,
                  background: "#f9f9f9",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                  borderRadius: "4px",
                  padding: "4px 2px 4px 3px",
                  cursor: "pointer",
                  textAlign: "center",
                  height: "110px ",
                  color:"white"
                }}
              >
                <p style={{ width: "170px" ,paddingTop:"5px", borderBottom: "1px black solid", paddingBottom:"5px"}} onClick={handleLogout}>
                  <NavLink
                    to="/login"
                    onClick={handleLogout}
                    style={{
                      fontSize: "20px",
                      lineHeight: "25px",
                      color:"black"
                    }}
                  >
                    Tài khoản
                  </NavLink>
                </p>
                <p style={{ width: "170px" ,paddingTop:"5px", borderBottom: "1px black solid", paddingBottom:"5px"}} onClick={handleLogout}>
                  <NavLink
                    to="/login"
                    onClick={handleLogout}
                    style={{
                      fontSize: "20px",
                      lineHeight: "25px",
                      color:"black"
                    }}
                  >
                    Lích sử
                  </NavLink>
                </p>
                <p style={{ width: "170px" ,paddingTop:"5px"}} onClick={handleLogout}>
                  <NavLink
                    to="/help"
                    onClick={handleLogout}
                    style={{
                      fontSize: "20px",
                      lineHeight: "25px",
                      color:"black"
                    }}
                  >
                    Trợ giúp
                  </NavLink>
                </p>
              </div>
            )}
            {showMenu && !storedUsername && (
              <div
              className="dropDown"
              style={{
                position: "absolute",
                top: "100%",
                right: 0,
                background: "#f9f9f9",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                borderRadius: "4px",
                padding: "4px 2px 4px 3px",
                cursor: "pointer",
                textAlign: "center",
                height: "80px ",
                color:"white"
              }}
            >
              <p style={{ width: "170px" ,paddingTop:"5px", borderBottom: "1px black solid", paddingBottom:"5px"}} onClick={handleLogout}>
                <NavLink
                  to="/login"
                  onClick={handleLogout}
                  style={{
                    fontSize: "20px",
                    lineHeight: "25px",
                    color:"black"
                  }}
                >
                  Đăng nhập
                </NavLink>
              </p>

              <p style={{ width: "170px" ,paddingTop:"5px"}} onClick={handleLogout}>
                <NavLink
                  to="/help"
                  onClick={handleLogout}
                  style={{
                    fontSize: "20px",
                    lineHeight: "25px",
                    color:"black"
                  }}
                >
                  Trợ giúp
                </NavLink>
              </p>
            </div>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
