import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import AtmParentContainer from "Components/pre-login-container";

import AtmRoutes from "./pre-login/Routes";

class BaseRoutes extends Component {
  render() {
    return (
      <AtmParentContainer style={{ top: "15%", left: "35%", width: "500px" }}>
        <Switch>
          <Route path="/" component={AtmRoutes} />
        </Switch>
      </AtmParentContainer>
    );
  }
}

export default BaseRoutes;
