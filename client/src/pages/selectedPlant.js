// displays data for particular selected plant
import React from "react";
import "./css/selectedPlant.css";
import { useHistory } from "react-router-dom";
import { useAuth0 } from "../react-auth0-spa";
import API from "./../utils/api";

function SelectedPlant(props) {
    // checks if user logged in
    const { isAuthenticated, loginWithPopup } = useAuth0();

    // allows for redirects
    let history = useHistory();

    // redirects to results page on click of return link
    function handleClick() {
        history.push("/results");
    }
    // makes api call on click of save button
    function handleSave() {
        API.addCollection(props.userid, props.name, props.id);
    }

    // function to capitalize first letter of every word in plant name
    let newName = "";
    if (props.length !== 0) {
        newName = String(props.name)
            .split(" ")
            .map(
                (eachWord) =>
                    eachWord.charAt(0).toUpperCase() + eachWord.slice(1)
            )
            .join(" ");
    }

    return (
        <div>
            <div className="row plantName">
                {/* shows capitalized plant name or defaults to original if function hits error */}
                {newName !== "Undefined" && <h4>{newName}</h4>}
                {newName === "Undefined" && <h4>{props.name}</h4>}
            </div>

            <div className="row">
                <div className="col s12 imageHere">
                    <img id="image" src={props.image} alt={props.newName} />
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

            {/* displays extra information on each plant if user is logged in */}
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

            {/* sets create account or save buttons depending on user login status */}
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
                            onClick={() =>
                                loginWithPopup({}).then(history.push("/"))
                            }
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
