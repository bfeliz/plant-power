import React, { useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import Scroll from "./components/scroll/scroll";
import "materialize-css/dist/css/materialize.min.css";
import Welcome from "./pages/index";
import NoMatch from "./pages/nomatch";
import Navbar from "./components/nav/index";
import API from "./utils/api";
import Results from "./pages/searchResults";
import Plant from "./pages/selectedPlant";
import NotFound from "./pages/notfound";
import "./App.css";
import ExternalApi from "./components/views/ExternalApi";
import PrivateRoute from "react-private-route";

function App() {
    const [results, setResults] = useState([]);
    const [search, setSearch] = useState("");

    const handleInputChange = (event) => {
        const { value } = event.target;
        setSearch(value);
    };

    const history = useHistory();

    const handleFormSubmit = (event) => {
        event.preventDefault();
        API.getSearch(search)
            .then((res) => {
                if (res.data.length === 0) {
                    history.push("/notfound");
                } else {
                    setResults(res.data);
                }
            })
            .then(setSearch(""))
            .then(history.push("/results"))
            .catch((err) => console.log(err));
    };

    const [plantResults, setPlantResults] = useState([]);

    const cardClick = (id) => {
        let plant = {};
        API.getPlant(id)
            .then((res) => {
                console.log(res.data);
                if (res.data.images[0]) {
                    plant = {
                        name: res.data.common_name,
                        image: res.data.images[0].url,
                        type: res.data.duration,
                        shade: res.data.main_species.growth.shade_tolerance,
                        tempMin:
                            res.data.main_species.growth.temperature_minimum
                                .deg_f,
                        water: res.data.main_species.growth.drought_tolerance,
                    };
                } else {
                    plant = {
                        name: res.data.common_name,
                        type: res.data.duration,
                        shade: res.data.main_species.growth.shade_tolerance,
                        tempMin:
                            res.data.main_species.growth.temperature_minimum
                                .deg_f,
                        water: res.data.main_species.growth.drought_tolerance,
                    };
                }
                setPlantResults(plant);
            })
            .then(history.push("/plant"))
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
                        <Scroll>
                            <Switch>
                                <Route exact path={["/"]}>
                                    <Welcome />
                                </Route>
                                <PrivateRoute path="/user" />
                                <PrivateRoute
                                    path="/external-api"
                                    component={ExternalApi}
                                />
                                <Route exact path={["/results"]}>
                                    <Results
                                        results={results}
                                        cardClick={cardClick}
                                    />
                                </Route>
                                <Route exact path={["/plant"]}>
                                    <Plant
                                        name={plantResults.name}
                                        image={plantResults.image}
                                        type={plantResults.type}
                                        shade={plantResults.shade}
                                        tempMin={plantResults.tempMin}
                                        water={plantResults.water}
                                    />
                                </Route>
                                <Route exact path={"/notfound"}>
                                    <NotFound />
                                </Route>
                                <Route>
                                    <NoMatch />
                                </Route>
                            </Switch>
                        </Scroll>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
