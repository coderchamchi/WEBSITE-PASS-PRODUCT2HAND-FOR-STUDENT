import React, { useState } from "react";
import Header from "../HeaderJewelry";
import "./Help.css"
function Info({ username, onLogout }) {
    const [term, setTerm] = useState('');
    const handleInputChange = (event) => {
        setTerm(event.target.value);
    };
    return (
        <div>
            <div id="main">
                <div id="header">
                    <Header onLogout={onLogout} username={username} />
                </div>
                <div className="contenthome">
                    <div className="gadian">
                        <div>
                            <h2 style={{ fontSize: "40px", paddingLeft: "50px" }}>TRỢ GIÚP</h2>
                        </div>
                        <div>
                            <h3 className="title" style={{ fontSize: "30px", textAlign: "center" }}>Chúng mình có thể giúp gì cho bạn ?</h3>
                        </div>
                        <div className="search-bar">
                            <input
                                type="text"
                                placeholder="Tìm kiếm từ khóa tại đây"
                                value={term}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <p style={{ fontSize: "30px", paddingLeft: "50px" ,paddingBottom:"30px"}}>Những câu hỏi thường gặp:</p>
                    <div>
                        <div className="quest">
                            <p>Làm thế nào để đăng sản phẩm cần bán?</p>
                            <div className="border1"></div>
                            <p>Làm thế nào để mua sản phẩm?</p>
                            <div className="border1"></div>
                            <p>Làm thế nào để liên hệ với người bán?</p>
                            <div className="border1"></div>
                            <p>Làm thế nào để thanh toán sản phẩm?</p>
                            <div className="border1"></div>
                            <p>Làm thế nào để xoá tài khoản?</p>
                            <div className="border1"></div>
                            <p>Làm thế nào để thay đổi thông tin tài khoản? </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Info;
