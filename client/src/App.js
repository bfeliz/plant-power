import React, { useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import Login from "./pages/login";
import NoMatch from "./pages/nomatch";
import Navbar from "./components/nav/index";
import API from "./utils/api";
import Results from "./components/searchResults/searchResults";
import Plant from "./components/selectedPlant/selectedPlant";
import "./App.css";

function App() {
    const [results, setResults] = useState([]);
    const [search, setSearch] = useState("");

    const handleInputChange = (event) => {
        const { value } = event.target;
        setSearch(value);
    };

    var history = useHistory();
    const handleFormSubmit = (event) => {
        event.preventDefault();
        API.getSearch(search)
            .then((res) => {
                setResults(res.data);
            })
            .then(setSearch(""))
            .then(history.push("/results"))
            .catch((err) => console.log(err));
    };
    return (
        <div>
            <Navbar
                handleInputChange={handleInputChange}
                handleFormSubmit={handleFormSubmit}
                search={search}
            />
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        <Switch>
                            <Route exact path={["/results"]}>
                                <Results results={results} />
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
    );
}

export default App;
