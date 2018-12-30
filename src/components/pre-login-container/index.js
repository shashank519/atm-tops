import React, { Component } from "react";
import { Layout } from "antd";

import PreLoginHeader from "Components/header-prelogin";
import FooterPrelogin from "Components/footer-prelogin";

import "./PreLoginContainer.scss";

const { Content } = Layout;

class PreLoginContainer extends Component {
  render() {
    return (
      <Layout className="layout">
        <PreLoginHeader />
        <Content style={{ padding: "0 50px" }}>
          <div className="pre-login-cont">
            <div className="form-panel" style={this.props.style}>
              {this.props.children}
            </div>
            <div className="second-panel" />
            <div
              className="f-panel"
              style={{ height: "500px", background: "#fff" }}
            />
          </div>
        </Content>
        <FooterPrelogin />
      </Layout>
    );
  }
}

export default PreLoginContainer;
