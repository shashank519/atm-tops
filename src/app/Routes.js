import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import PreLoginContainer from "Components/pre-login-container";

import PreLoginRoutes from "./pre-login/Routes";

class BaseRoutes extends Component {
  render() {
    return (
      <PreLoginContainer style={{ top: "15%", left: "35%", width: "500px" }}>
        <Switch>
          <Route path="/" component={PreLoginRoutes} />
        </Switch>
      </PreLoginContainer>
    );
  }
}

export default BaseRoutes;
