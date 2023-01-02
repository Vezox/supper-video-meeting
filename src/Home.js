import React, { Component } from "react";
import { Input, Button, IconButton } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
    };
  }

  handleChange = (e) => this.setState({ url: e.target.value });

  join = () => {
    if (this.state.url !== "") {
      var url = this.state.url.split("/");
      window.location.href = `/${url[url.length - 1]}`;
    } else {
      var url = Math.random().toString(36).substring(2, 7);
      window.location.href = `/${url}`;
    }
  };

  render() {
    return (
      <div className="container2">
        <div class="header">
          <div>
            <h1 class="colorWhile boxLogo">MEET</h1>
          </div>
        </div>

        <div class="body">
          <p class="title">
            Cuộc họp video chất lượng. Giờ đây miễn phí cho tất cả mọi người.
          </p>
          <p class="subTitle">
            Chúng tôi đã thiết kế lại Google Meet — dịch vụ tổ chức cuộc họp
            kinh doanh với độ bảo mật cao — để cung cấp miễn phí cho mọi người.
            Hỗ trợ bạn kết nối với mọi người với mọi khoảng cách.
          </p>

          <div class="boxJoin">
            <div>
              <Input placeholder="Nhập mã phòng" onChange={(e) => this.handleChange(e)} />
              <Button
                variant="contained"
                color="primary"
                onClick={this.join}
                style={{ margin: "20px", backgroundColor: "#008080" }}
              >
                Bắt đầu
              </Button>
            </div>
          </div>

          <p class="subTitle colorRed">
            Bắt đầu một cuộc họp mới hoặc tham gia vào cuộc họp
          </p>
        </div>

        {/* <div>
          <h1 style={{ fontSize: "45px" }}>Video Meeting</h1>
          <p style={{ fontWeight: "200" }}>
            Video conference website that lets you stay in touch with all your
            friends.
          </p>
        </div> */}

        <div class="footer">
          {/* <h1 class="colorWhile">Hân hạnh được phục vụ</h1> */}
          <p class="subTitle colorWhile">copyright ©: Nhóm 10</p>
        </div>
      </div>
    );
  }
}

export default Home;
