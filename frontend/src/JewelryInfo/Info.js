import React, { useState } from "react";
import Header from "../HeaderJewelry";
import BiaInfo from "../../src/assets/img/Bìa/BiaInfo.png";
import ImgInfo1 from "../../src/assets/img/ImgInfo/img1Info.jpg";
import ImgInfo2 from "../../src/assets/img/ImgInfo/img2Info.jpg";
import ImgInfo3 from "../../src/assets/img/ImgInfo/img3Info.jpg";
import ImgInfo4 from "../../src/assets/img/ImgInfo/img4Info.png";
import ImgInfo5 from "../../src/assets/img/ImgInfo/img5Info.jpg";
import "./Info.css";
import Footer from "../FooterJewelry/Footer";
function Info({ username, onLogout }) {
  const [contentInfo, setContentInfo] = useState("huongDanDoSize");

  const handleContentClick = (contentName) => {
    setContentInfo(contentName);
  };

  return (
    <div>
      <div id="main">
        <div id="header">
          <Header onLogout={onLogout} username={username} />
        </div>

        <div id="slider">
          <img src={BiaInfo} alt="" />
        </div>

        <div id="content1">
          <div id="content-sidebar">
            <div className="sidebar-infor2" style={{ cursor: "pointer" }}>
              <h3 onClick={() => handleContentClick("huongDanDoSize")}>
                <i className="fa-solid fa-ruler"></i> Hướng dẫn đo size
              </h3>
              <h3 onClick={() => handleContentClick("baoHanhBaoQuan")}>
                <i className="fa-solid fa-check-to-slot"></i> Bảo hành bảo quản
              </h3>
              <h3 onClick={() => handleContentClick("giaoHangDoiTra")}>
                <i className="fa-solid fa-truck"></i> Giao hàng & đổi trả
              </h3>
            </div>
          </div>

          <div className="content-end1">
            <div className="titleInfo">
              <h2>
                {contentInfo === "huongDanDoSize" && "Hướng dẫn đo size"}
                {contentInfo === "baoHanhBaoQuan" && "Bảo hành bảo quản"}
                {contentInfo === "giaoHangDoiTra" && "Giao hàng & đổi trả"}
              </h2>
            </div>

            <div className="InstructInfo">
              {contentInfo === "huongDanDoSize" && (
                <>
                  <h3>
                    CÁCH ĐO KÍCH CỠ TAY ĐEO TRANG SỨC - D-Luxury BẠC 925 SILVER
                  </h3>
                  <p>
                    Chắc rằng các bạn đã nhiều lần gặp khó khăn khi nhẫn và vòng
                    tay có quá nhiều cỡ với số đo đa dạng, bạn không biết tay
                  </p>
                  <p>
                    mình là số mấy mới vừa? .Từ giờ bạn không phải băng khoăn
                    nữa, vì D-Luxury sẽ mách bạn những cách đo nhẫn cực kỳ
                  </p>
                  <p> dễ và hiệu quả nhé.</p>
                  <p>
                    <a>Cách thứ nhất:</a> Nếu bạn có sẵn chiếc nhẫn hoặc vòng
                    tay
                  </p>
                  <p>
                    Bước 1: Dùng thước đặt ngang ở giữa nhẫn của bạn để đo đường
                    kính, nhớ đo khoảng cách lòng bên trong của nhẫn.
                  </p>

                  <p>
                    Bước 2: Gửi D-Luxury số đo theo đơn vị cm nhé (centi mét).
                  </p>
                  <img src={ImgInfo1} alt="" />
                  <a>Cách thứ hai:</a>
                  <p>
                    Bước 1: Dùng một sợi chỉ, quấn quanh ngón tay/cổ tay bạn
                    muốn đo, làm dấu lại.
                  </p>
                  <p>
                    Bước 2: Đo chiều dài sợi chỉ, chiều dài đó là chu vi của
                    ngón tay/cổ tay bạn. Đối với cổ tay các bạn nhớ trừ hao ra
                    nhen
                  </p>

                  <p>
                    Bước 3: Gửi số đo cho D-Luxury với đơn vị là cm nhe (centi
                    mét).
                  </p>
                  <img src={ImgInfo2} alt="" />
                  <img src={ImgInfo3} alt="" />
                  <h4>BẢNG GIÁ DÂY CHUYỀN</h4>
                  <p>
                    Lưu ý: Các bạn nên đo khớt đốt ngón tay trước bụng ngón tay,
                    chu vi của phần nào lớn hơn bạn sẽ lấy số chu vi đó làm size
                  </p>

                  <p>
                    Vì nhẫn phải lọt qua khớp đốt ngón tay mới vào được tới bụng
                    ngón tay được nè :D. Nếu khớp đốt ngón tay to hơn bụng
                  </p>
                  <p>
                    ngón tay mà size nhận bạn chọn lại là bụng ngón tay thì nhẫn
                    sẽ không bao giờ lọt vào trong bụng ngón tay được nhé.
                  </p>

                  <p>
                    Dây chuyền bạc của D-Luxury có nhiều độ dài và kích cỡ khác
                    nhau phù hợp với nhiều loại mặt dây và độ dài mong muốn.
                    Được
                  </p>
                  <p>
                    kết bằng bạc chất lượng cao đủ tiêu chuẩn 925. Giá niêm yết
                    theo bảng sau:
                  </p>
                  <img src={ImgInfo4} alt="" />
                  <img src={ImgInfo5} alt="" />
                </>
              )}

              {contentInfo === "baoHanhBaoQuan" && (
                <>
                  <h3>BẢO HÀNH & BẢO QUẢN</h3>
                  <h3>CHÍNH SÁCH BẢO HÀNH TRANG SỨC BẠC CỦA D-Luxury</h3>
                  <p>
                    Khi mua sản phẩm trang sức bạc có sẵn tại D-Luxury, quý
                    khách sẽ nhận được các quyền lợi về bảo hành áp dụng từ
                  </p>
                  <p> 1/8/2019 như sau:</p>
                  <p>- Bảo hành vệ sinh trắng sáng MIỄN PHÍ vô thời hạn.</p>
                  <p>
                    - Đối với các trường hợp đứt, gãy, rơi hột, thay khoá,
                    D-Luxury nhận bảo hành MIỄN PHÍ 1 vị trí lỗi/ 1 sản phẩm
                    trong 1 tháng
                  </p>
                  <p>
                    kể từ ngày mua với điều kiện PHIẾU BẢO HÀNH còn nguyên vẹn
                    không bị rách. KHÔNG áp dụng cho sản phẩm giảm
                  </p>
                  <p>giá và sản phẩm gia công theo yêu cầu.</p>
                  <p>
                    - Từ tháng thứ 2 hoặc từ vị trí lỗi thứ 2 trở đi, D-Luxury
                    sẽ tính phí dao động tuỳ vào tình trạng sản phẩm.
                  </p>
                  <p>
                    - Thời gian bảo hành từ 3 - 5 tuần kể từ ngày nhận sản phẩm.
                  </p>
                  <h3>LƯU Ý KHÔNG NHẬN BẢO HÀNH CÁC TRƯỜNG HỢP SAU:</h3>
                  <p>
                    - Các sản phẩm biến dạng hoặc hư hỏng nặng trên 40% ( do
                    D-Luxury kiểm định % )
                  </p>
                  <p>- Khách hàng không chứng thực được lịch sử mua hàng.</p>
                  <p>
                    - Các sản phẩm Đá phong thuỷ , đá CZ, resin sẽ không nhận
                    bảo hành.
                  </p>
                  <p>
                    - Đối với sản phẩm giảm giá: không được hỗ trợ bảo hành FREE
                    1 LẦN, các trường hợp sửa chữa hư hỏng dưới 40% sẽ
                  </p>
                  <p>
                    được tính phí, dịch vụ làm trắng sáng miễn phí trọn đời vẫn
                    được áp dụng.
                  </p>
                  <p>
                    - D-Luxury chỉ nhận lưu giữ sản phẩm trong 30 ngày kể từ khi
                    sản phẩm đã được bảo hành và được thông báo để khách
                  </p>
                  <p>
                    hàng nhận hàng. Sau 30 ngày, nếu không có phản hồi từ quý
                    khách, sản phẩm sẽ thuộc quyền sở hữu của D-Luxury.
                  </p>

                  <p>
                    - Bên D-Luxury cũng nhận sửa cũng như làm mới các sản phẩm
                    bạc khác có tính phí nếu cam kết là bạc 925 trở lên,
                    D-Luxury có
                  </p>
                  <p> quyền từ chối tiếp nhận.</p>
                  <p>
                    - Quý khách có thể đem sản phẩm của mình đến bất kỳ store
                    nào thuộc hệ thống D-Luxury để được bảo hành.
                  </p>

                  <h3>CHÍNH SÁCH ĐỔI SẢN PHẨM:</h3>
                  <p>
                    - Thời gian đổi hàng là 3 ngày kể từ lúc mua với điều kiện
                    sản phẩm còn nguyên vẹn như mới, sản phẩm đổi có giá trị cao
                  </p>
                  <p>
                    hơn hoặc bằng giá trị sản phẩm đã mua, chỉ được đổi 1 lần.
                    D-Luxury không hoàn tiền nếu đổi sản phẩm giá trị thấp hơn.
                  </p>

                  <p>
                    - KHÔNG áp dụng đổi cho sản phẩm giảm giá và sản phẩm gia
                    công theo yêu cầu. D-Luxury KHÔNG chịu trách nhiệm khi
                  </p>
                  <p>
                    khách đã mang sản phẩm ra khỏi cửa hàng, nên vui lòng kiểm
                    tra kỹ sản phẩm và chọn món mà quý khách ưng ý nhất trước
                  </p>
                  <p> khi ra khỏi cửa hàng.</p>
                  <h3>BẠC 925 LÀ GÌ?</h3>
                  <p>
                    - Bạc 925 là một hợp kim chứa 92.5% là bạc nguyên chất và
                    7.5% còn lại hợp chất tạo độ cứng cáp, giúp chế tạo được
                  </p>
                  <p>
                    những sản phẩm có độ tinh xảo tuyệt đối. 7.5% là công thức
                    tuyệt mật của từng thuơng hiệu, nó sẽ quyết định độ bóng, độ
                  </p>
                  <p>
                    cứng của bạc, giảm lỗ tổ ong (xuất hiện ở bạc nguyên chất).
                    Vì bạc 100% quá mềm để có thể chế tác những sản phẩm bạc
                  </p>
                  <p>
                    tinh xảo, khó gia công và dễ bị biến dạng trong quá trình sử
                    dụng.
                  </p>
                  <p>
                    - Tại D-Luxury, để tránh tình trạng tỉ trọng bạc sai lệch,
                    mỗi quy trình luôn được D-Luxury kiểm tra nghiêm ngặt về
                    phần trăm
                  </p>
                  <p>
                    bạc trong thành phẩm. Nên những sản phẩm chế tác bên
                    D-Luxury có phần trăm bạc luôn ổn định trong khoảng 92.5% -
                    95%.
                  </p>

                  <p>
                    - Khách hàng sẽ được D-Luxury hỗ trợ kiểm định chất lượng
                    sản phẩm bằng máy đo nếu có nhu cầu (tính phí). Đám bảo
                  </p>
                  <p>
                    chính xác hơn việc kiểm tra thủ công tại các, tiệm vàng nhỏ
                    lẻ. Đối với 1 số đơn hàng đặt làm riêng (customize) đặc biệt
                    do
                  </p>
                  <p>
                    khách yêu cầu, D-Luxury sẽ làm phần trăm bạc có thể cao hơn
                    từ 95% - 99.9% tùy theo yêu cầu của khách.
                  </p>
                </>
              )}

              {contentInfo === "giaoHangDoiTra" && (
                <>
                  <h3>ĐẶT HÀNG</h3>
                  <a>D-Luxury hỗ trợ các phương thức đặt hàng như sau:</a>
                  <p>
                    - Inbox trực tiếp vào messenger của page{" "}
                    <a>m.me/D-Luxury</a>
                  </p>
                  <p>
                    - Comment chọn hàng trong album trên facebook{" "}
                    <a>https://www.facebook.com/pg/D-Luxury/photos</a>
                  </p>
                  <p>
                    - Direct trực tiếp vào instagram{" "}
                    <a>https://www.instagram.com/D-Luxury</a>
                  </p>
                  <p>
                    - Comment chọn hàng trên instagram{" "}
                    <a>https://www.instagram.com/D-Luxury</a>
                  </p>
                  <p>
                    - Gọi điện thoại trực tiếp vào số <a>+84975469556</a>
                  </p>
                  <p>
                    - Gửi tin nhắn đặt hàng trực tiếp vào số <a>+84975469556</a>
                  </p>
                  <p>
                    - Chọn hàng, bỏ vào giở hàng và check out hàng trên trang
                    website này.
                  </p>
                  <h4>Cú pháp đặt hàng như sau:</h4>
                  <p>
                    - Mô tả hàng hóa bằng hình ảnh, tên hoặc mã hàng. Trong
                    trường hợp hàng đặt riêng cần phải bàn bạc chi
                  </p>
                  <p>tiết hơn với D-Luxury.</p>
                  <p>
                    - Họ và tên thật (tránh dùng nickname), địa chỉ và số điện
                    thoại người nhận
                  </p>
                  <p>- Cách thức giao hàng (ở mục giao hàng bên dưới)</p>
                  <p>
                    Ghi chú: Đặt hàng tức là không mua hàng có sẵn tại cửa hàng.
                  </p>
                  <h3>GIAO HÀNG VÀ CÁC KHOẢN PHÍ</h3>
                  <p>
                    Ghi chú: COD là dịch vụ giao hàng thu tiền hộ của bên đối
                    tác thứ 3. Vùng hỗ trợ COD và bảng giá ship hoàn toàn được
                  </p>
                  <p>quy định bởi bên đối tác thứ 3.</p>
                  <h4>D-Luxury hỗ trợ các hình thức giao hàng như sau:</h4>
                  <p>
                    - Giao hàng tại cửa hàng: khách hàng tới trực tiếp của hàng
                    để nhận hàng, khách hàng phải đặt cọc trên 50% (năm mươi
                  </p>
                  <p>
                    phần trăm) giá trị sản phẩm trước để D-Luxury giữ món hàng
                    (hoặc đặt cọc đối với đơn đặt hàng riêng). Phần trăm số
                  </p>
                  <p>tiền cọc phải trên 50% và được quyết định bởi D-Luxury.</p>
                  <p>- Giao hàng qua dịch vụ chuyển phát nhanh</p>
                  <p>
                    - Giao hàng không hỗ trợ COD: với những vùng chưa được hỗ
                    trợ ship COD, khách hàng phải thanh toán 100% (toàn bộ)
                  </p>
                  <p>
                    giá trị sản phẩm và cả phí giao hàng trước cho D-Luxury, sau
                    đó D-Luxury mới tiến hành làm đơn và giao hàng.
                  </p>

                  <p>
                    - Giao hàng có hỗ trợ COD: với những vùng được hỗ trợ COD,
                    khách hàng thanh toán chi phí với nhân viên giao hàng.
                  </p>

                  <p>
                    Thời gian ước tính cho dịch vụ chuyển phát nhanh như sau:
                  </p>
                  <p>
                    - Đối với khu vực nội thành: tối thiểu 1 ngày, tối đa 3
                    ngày.
                  </p>
                  <p>
                    - Đối với khu vực ngoại thành: tối thiểu 2 ngày, tối đa 5
                    ngày.
                  </p>
                  <p>- Đối với nước ngoài: tối thiểu 7 ngày, tối đa 28 ngày.</p>
                  <p>
                    D-Luxury sẽ tư vấn phương án giao hàng nhanh và tiết kiệm
                    nhất tùy theo yêu cầu của khách hàng.
                  </p>
                  <p>
                    Trong trường hợp không chọn được phương án giao hàng nào hợp
                    lý, D-Luxury có quyền hủy đơn hàng.
                  </p>
                  <h3>ĐỔI HÀNG</h3>
                  <p>
                    <i className="fa-solid fa-star"></i> Tất cả các sản phẩm đã
                    mua sẽ không được hoàn trả lại bằng tiền mặt.
                  </p>
                  <p>
                    <i className="fa-solid fa-star"></i> Các sản phẩm đã mua
                    được nhận đổi trong vòng 3 ngày (kể từ ngày mua) kèm theo
                    hoá đơn mua hàng, với sản phẩm có
                  </p>
                  <p>giá trị tương đương hoặc lớn hơn.</p>
                  <p>
                    {" "}
                    <i className="fa-solid fa-star"></i> Các trường hợp không
                    nhận đổi, trả:
                  </p>
                  <p>
                    - Sản phẩm đã mua quá 3 ngày. Trong trường hợp nếu size nhẫn
                    không vừa, D-Luxury sẽ thu phí chỉnh sửa.
                  </p>

                  <p>
                    - Sản phẩm bị đen, móp méo, đứt gãy, cong vênh,... không
                    đúng với nguyên trạng ban đầu (chính vì thế D-Luxury mong
                  </p>
                  <p>quý khách kiểm tra kĩ sản phẩm trước khi mua).</p>
                  <p>
                    - Các sản phẩm được đặt riêng, size lớn hoặc nhỏ hơn so với
                    size chuẩn (nhẫn: 1.4-1.8, vòng: 5.2- 5.6) của D-Luxury sẽ
                    thu
                  </p>
                  <p>phí chỉnh sửa và không được đổi trả.</p>
                  <p>
                    {" "}
                    <i className="fa-solid fa-star"></i> Trong trường hợp đặt
                    cọc sản phẩm:
                  </p>
                  <p>
                    - Nếu khách hàng huỷ đơn hàng thì số tiền cọc sẽ không được
                    hoàn trả.
                  </p>
                  <p>
                    - Nếu D-Luxury hủy đơn vì một lý do nào đó, khách hàng sẽ
                    được hoàn trả toàn bộ số tiền đã cọc ( hoặc thanh toán) đối
                    với
                  </p>
                  <p>sản phẩm tương ứng.</p>
                  <p>
                    <i className="fa-solid fa-star"></i> D-Lux có quyền từ chối
                    việc đổi trả hàng nếu sản phẩm không thoã mãn những yêu cầu
                    trên.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default Info;
