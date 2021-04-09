import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import MainNav from "./components/MainNav/index";
import SearchResults from "./pages/SearchResults";
import './App.css';

function App() {
  return (
    <Router>

        <div>
          <Switch>
          <Route exact path={["/"]}>
            <Home />
          </Route>
            <Route exact path={["/events"]}>
              <SearchResults />
            </Route>
            {/* <Route exact path="/events/:id">
                    </Route> */}
          </Switch>
        </div>

    </Router>
  );
}

export default App;
