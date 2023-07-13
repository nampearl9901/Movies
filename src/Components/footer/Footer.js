import React from "react";
import "./footer.scss";

export default function Footer() {
  return (
    <div className=" container footer  grid grid-cols-4 ">
      <div className="footer__left   ">
        <h1>GIỚI THIỆU</h1>
        <ul>
          <li>
            <a>Về Chúng Tôi</a>{" "}
          </li>
          <li>
            <a>Thỏa Thuận Về Sử Dụng</a>
          </li>

          <li>
            <a>Quy Chế Hoạt Động</a>
          </li>

          <li>
            <a>Chính Sách Hoạt Động</a>
          </li>
        </ul>
      </div>
      <div className="footer__left ">
        <h1>GÓC ĐIỆN ẢNH</h1>
        <ul>
          <li>
            <a>Thể Loại Phim</a>{" "}
          </li>
          <li>
            <a>Bình Luận Phim</a>
          </li>

          <li>
            <a>Blog Điện Ảnh</a>
          </li>

          <li>
            <a>Phim hay Tháng</a>
          </li>
        </ul>
      </div>
      <div className="footer__left ">
        <h1>HỔ TRỢ</h1>
        <ul>
          <li>
            <a>Góp ý</a>{" "}
          </li>
          <li>
            <a>Sale & Services</a>
          </li>

          <li>
            <a>Rạp / giá vé</a>
          </li>

          <li>
            <a>Tuyển dụng</a>
          </li>
        </ul>
      </div>
      <div className="footer__icon ">
        <div className="iconn">
        <h1>KẾT NỐI</h1>
        <ul>
        <li>
            <a>Góp ý</a>
          </li>
         
        </ul>
        </div>
        <div className="iconn1">
        <h1>DOWNLOAD APP</h1>
        <ul>
          <li>
            <a>Góp ý</a>
          </li>
      
        </ul>
      </div>
      </div>
     
    </div>
  );
}
