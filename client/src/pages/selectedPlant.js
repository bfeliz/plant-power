import React from "react";
import "./css/selectedPlant.css";
import { useHistory } from "react-router-dom";
import { useAuth0 } from "../react-auth0-spa";
import API from "./../utils/api";

function SelectedPlant(props) {
    const { isAuthenticated, loginWithPopup } = useAuth0();

    let history = useHistory();

    function handleClick() {
        history.push("/results");
    }
    function handleSave() {
        API.addCollection(props.userid, props.name, props.id);
    }

    return (
        <div>
            <div className="row plantName">
                <h4>{props.name}</h4>
            </div>

            <div className="row">
                <div className="col s12 imageHere">
                    <img id="image" src={props.image} alt={props.name} />
                </div>
            </div>

            <div className="row">
                <div className="col s12">
                    <i className="fas fa-tint"></i>
                    Water Use: {props.water}
                </div>
            </div>

            <div className="row">
                <div className="col s12">
                    <i className="fas fa-temperature-high"></i>
                    Minimum Temperature: {props.tempMin} &deg;F
                </div>
            </div>

            {isAuthenticated && (
                <div>
                    <div className="row">
                        <div className="col s12">
                            <i className="fas fa-leaf leaficon"></i>
                            Type: {props.type}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <i className="fas fa-sun"></i>
                            Drought Tolerance: {props.water}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <i className="fas fa-plus"></i>
                            Soil Fertility: {props.fertility}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <i className="fas fa-seedling"></i>
                            Family: {props.family}
                        </div>
                    </div>
                </div>
            )}

            <div className="row">
                <div className="col s12">
                    <i className="fas fa-cloud"></i>
                    Shade Tolerance: {props.shade}
                </div>
                <br></br>
                <br></br>
                <a onClick={handleClick} className="return-link">
                    Return to search results
                </a>
            </div>

            {isAuthenticated && (
                <div className="row">
                    <div className="col s12">
                        <a
                            className="waves-effect waves-light btn-small save"
                            onClick={handleSave}
                        >
                            Save to collection
                        </a>
                    </div>
                </div>
            )}
            {!isAuthenticated && (
                <div className="row infoCreate">
                    <div className="col s12">
                        <p>
                            Like what you see? Want to know more? Log in or sign
                            up for access to additional features and data!
                        </p>
                        <a
                            className="waves-effect waves-light btn-small create"
                            onClick={() => loginWithPopup({})}
                        >
                            create account
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
}

export default SelectedPlant;
