import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Container from './Container';
import Header from '../containers/Header';
import Footer from './Footer';
import Homepage from './Homepage';
import ArtCamp from './ArtCamps';
import ArtParties from './ArtParties';
import Tuition from './Tuition';
import Location from './Locations';
import Classes from './Classes';
import About from './AboutUs';

class App extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/camps" component={ArtCamp} />
          <Route exact path="/parties" component={ArtParties} />
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
