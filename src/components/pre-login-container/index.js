import React, { Component } from "react";
import { Layout } from "antd";

import "./PreLoginContainer.scss";

const { Content } = Layout;

class PreLoginContainer extends Component {
  render() {
    return (
      <Layout className="layout">
        <Content style={{ padding: "0 50px" }}>
          <div className="pre-login-cont">
            <div className="form-panel" style={this.props.style}>
              {this.props.children}
            </div>
            <div className="second-panel" />
            <div className="f-panel" style={{ background: "#fff" }} />
          </div>
        </Content>
      </Layout>
    );
  }
}

export default PreLoginContainer;
