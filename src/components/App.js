import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Container from "components/Container";
import Header from "components/Header";
import Footer from "components/Footer";
import Homepage from "../containers/Homepage";
import ArtCamp from "../containers/ArtCamps";
import Tuition from "../containers/Tuition";
import Location from "../containers/Locations";
import Classes from "../containers/Classes";
import About from "../containers/AboutUs";

class App extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/camps" component={ArtCamp} />
          <Route exact path="/about" component={About} />
          <Route exact path="/classes" component={Classes} />
          <Route exact path="/tuition" component={Tuition} />
          <Route exact path="/locations" component={Location} />
        </Switch>
        <Footer />
      </Container>
    );
  }
}

export default App;
