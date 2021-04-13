import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import UserLogin from "./pages/UserLogin";
import UserSignup from "./pages/UserSignup";
import UserProfile from "./pages/UserProfile";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path={["/"]}>
            <Home />
          </Route>
          <Route exact path={["/searchresult"]}>
            <SearchResults />
          </Route>
          <Route exact path={["/login"]}>
            <UserLogin />
          </Route>
          <Route exact path={["/signup"]}>
            <UserSignup />
          </Route>
          <Route exact path={["/userprofile"]}>
            <UserProfile />
          </Route>
          {/* <Route exact path="/events/:id">
                    </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
