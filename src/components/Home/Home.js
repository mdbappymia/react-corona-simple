import React from "react";
import Countrise from "../Countries/Countrise";
import MyNav from "../MyNav/MyNav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CountryDetails from "../CountryDetails/CountryDetails";
import CoronaUpdate from "../CoronaUpdate/CoronaUpdate";
import AllCoronaUpdate from "../AllCoronaUpdate/AllCoronaUpdate";
import Paini from "../NotFound/NotFound";

const Home = () => {
  return (
    <div>
      <Router>
        <MyNav></MyNav>
        <Switch>
          <Route exact path="/">
            <Countrise></Countrise>
          </Route>
          <Route path="/home">
            <Countrise></Countrise>
          </Route>
          <Route path="/details/:country">
            <CountryDetails></CountryDetails>
          </Route>
          <Route path="/corona-single/:countryget">
            <CoronaUpdate></CoronaUpdate>
          </Route>
          <Route path="/corona">
            <AllCoronaUpdate></AllCoronaUpdate>
          </Route>
          <Route path="*">
            <Paini></Paini>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Home;
