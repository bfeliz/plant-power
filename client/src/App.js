import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/login";
import NoMatch from "./pages/nomatch";
import Navbar from "./components/nav/index";
import Results from "./components/searchResults/searchResults";
import Plant from "./components/selectedPlant/selectedPlant";
import "./App.css";

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <div className="container">
                    <div className="row">
                        <div className="col s12">
                            <Switch>
                                <Route exact path={["/", "/results"]}>
                                    <Results />
                                </Route>
                                <Route exact path={["/", "/plant"]}>
                                    <Plant />
                                </Route>
                                <Route exact path="/login">
                                    <Login />
                                </Route>
                                <Route>
                                    <NoMatch />
                                </Route>
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
