    
import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Wizard from "./Components/Wizard"
// import Edit from "./Components/Edit"

export default (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/wizard" component={Wizard}  />
      {/* <Route exact path="/house/:id" component={Edit}/> */}
    </Switch>
  );