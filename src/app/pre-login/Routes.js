import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

const PageOne = React.lazy(() => import("./pageOne"));
const PageTwo = React.lazy(() => import("./pageTwo"));
const PageThree = React.lazy(() => import("./pageThree"));

class PreLoginRoutes extends Component {
  render() {
    return (
      <div>
        <React.Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" render={() => <PageOne />} />
            <Route path="/pageTwo" render={() => <PageTwo />} />
            <Route path="/pageThree" render={() => <PageThree />} />
          </Switch>
        </React.Suspense>
      </div>
    );
  }
}

export default PreLoginRoutes;
