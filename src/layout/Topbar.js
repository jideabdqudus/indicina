import React from "react";
import { Menu, Button } from "antd";
import Logo from "../assets/indicina-logo.svg";

class Topbar extends React.Component {
  state = {
    current: "home",
  };

  handleClick = (e) => {
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    return (
      <div className="container">
        <Menu
          onClick={this.handleClick}
          selectedKeys={[current]}
          mode="horizontal"
        >
          <Menu.Item key="logo">
            <img src={Logo} alt="Indicina Logo" />
          </Menu.Item>
          <Menu.Item key="home" style={myItem}>
            <span style={{ color: "#0073e7" }}>Home</span>
          </Menu.Item>
          <Menu.Item key="products" style={myItem}>
            Products
          </Menu.Item>
          <Menu.Item key="team" style={myItem}>
            Team
          </Menu.Item>
          <Menu.Item key="contact" style={{ float: "right" }}>
            <Button style={myButton}>
              <span style={{ paddingLeft: "25px", paddingRight: "25px" }}>
                Contact
              </span>
            </Button>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

const myItem = {
  float: "right",
  fontSize: "15px",
  fontWeight: "bold",
  color: "#7f8791",
};
const myButton = {
  backgroundColor: "#0073e7",
  color: "white",
  float: "right",
  borderRadius: "5px",
  fontWeight: "bold",
  fontSize: "15px",
  margin: "7px",
};

export default Topbar;
