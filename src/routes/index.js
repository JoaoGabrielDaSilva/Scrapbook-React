import { BrowserRouter as Router, Switch } from "react-router-dom";
import Route from "./RouterWrapper";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import CreateCard from "../pages/CreateCard";

const Routes = () => {
  <Router>
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/login" exact component={Login} />
      <Route path="/create-card" exact component={CreateCard} />
    </Switch>
  </Router>;
};

export default Routes;
