import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import NoMatch from "./pages/NoMatch";
import Navbar from "./components/nav/index";
import Container from "./components/container/container";
import "./App.css";

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Container />
                <Switch>
                    {/* <Route exact path={["/", "/books"]}>
                        <Books />
                    </Route>
                    <Route exact path="/books/:id">
                        <Detail />
                    </Route>
                    <Route>
                        <NoMatch />
                    </Route> */}
                </Switch>
            </div>
        </Router>
    );
}

export default App;
