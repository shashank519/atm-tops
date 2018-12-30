import React from "react";
import { withRouter } from "react-router-dom";

import { Menu } from "antd";

class HeaderPreLogin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: "",
      menuItems: [
        { key: 0, label: "Login", route: "login" },
        { key: 1, label: "Register", route: "register" }
      ]
    };
  }

  handleRoutes = tab => {
    this.setState({ activeTab: tab });
    this.props.history.push(`/${tab.route}`);
  };

  render() {
    return (
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={[String(this.state.activeTab.key)]}
        style={{ lineHeight: "50px" }}
      >
        {this.state.menuItems.map((row, i) => (
          <Menu.Item key={i} onClick={() => this.handleRoutes(row)}>
            {row.label}
          </Menu.Item>
        ))}
      </Menu>
    );
  }
}

export default withRouter(HeaderPreLogin);
