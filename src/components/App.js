import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Container from "components/Container";
import Header from "components/Header";
import Homepage from "../containers/Homepage";

class App extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
        </Switch>
      </Container>
    );
  }
}

export default App;
