import React, { Component } from "react";
import { Route } from "react-router-dom";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import FetchData from "./services/FetchData";
import Calendar from "./components/Calendar/Calendar";
import Details from "./components/Details/Details";
import "./style.css";

class App extends Component {
  fetchData = new FetchData();

  state = {
    rockets: [],
    rocket: "Falcon 1",
    rocketFeatures: null,
    company: null,
  };

  componentDidMount() {
    this.updateRocket();
    this.updateCompany();
  }

  updateRocket() {
    this.fetchData
      .getRocket()
      .then((data) => {
        this.setState({ rockets: data.map((item) => item.name) });
        return data;
      })
      .then((data) => data.find((item) => item.name === this.state.rocket))
      .then((rocketFeatures) => this.setState({ rocketFeatures }));
  }

  changeRocket = (rocket) => {
    this.setState(
      {
        rocket,
      },
      this.updateRocket
    );
  };

  updateCompany = () => {
    this.fetchData.getCompany().then((data) => this.setState({ company: data }));
  };

  render() {
    const { rockets, rocket, rocketFeatures, company } = this.state;

    return (
      <>
        <Header rockets={rockets} changeRocket={this.changeRocket} />
        <Route exact path="/" render={() => company && <Home company={company} />} />
        <Route
          exact
          path="/rocket"
          render={() => rocketFeatures && <Features rocketFeatures={rocketFeatures} />}
        ></Route>

        {/* if you want to do separated render with rocket name */}
        {/* <Route
          exact
          path="/rocket/:rocket"
          render={({ match }) =>
            rocketFeatures && <Features rocketFeatures={rocketFeatures} match={match} />
          }
        ></Route> */}

        <Route path="/calendar" component={Calendar} />

        <Route path="/details/:id" component={Details} />

        {company && <Footer companyLinks={company.links} />}
      </>
    );
  }
}

export default App;
