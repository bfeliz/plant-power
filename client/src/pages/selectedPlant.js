import React from "react";
import "./css/selectedPlant.css";
import { useHistory } from "react-router-dom";
import { useAuth0 } from "../react-auth0-spa";

function SelectedPlant(props) {
    const { isAuthenticated } = useAuth0();

    let history = useHistory();

    function handleClick() {
        history.push("/results");
    }
    return (
        <div>
            <div className="row plantName">
                <h4>{props.name}</h4>
            </div>

            <div className="row" id="image-row">
                <div className="col s12 imageHere">
                    <img id="image" src={props.image} alt={props.name} />
                </div>
            </div>

            <div className="row rowWater">
                <div className="col s1">
                    <i className="fas fa-tint watericon"></i>
                </div>
                <div className="col s11 water">
                    Drought Tolerance: {props.water}
                </div>
            </div>

            <div className="row rowTemp">
                <div className="col s1">
                    <i className="fas fa-temperature-high tempicon"></i>
                </div>
                <div className="col s11 temp">
                    Minimum Temperature: {props.tempMin} &deg;F
                </div>
            </div>

            <div className="row rowTemp">
                <div className="col s1">
                    <i className="fas fa-cloud"></i>
                </div>
                <div className="col s11 shade">
                    Shade Tolerance: {props.shade}
                </div>
                <br></br>
                <br></br>
                <a onClick={handleClick} className="return-link">
                    Return to search results
                </a>
            </div>

            {isAuthenticated && (
                <div className="row imgSave">
                    <div className="col s12 houseSave">
                        <a className="waves-effect waves-light btn-small save">
                            Save to collection
                        </a>
                    </div>
                </div>
            )}
            {!isAuthenticated && (
                <div className="row infoCreate">
                    <div className="col s12 houseCreate">
                        <p>
                            Like what you see? Want to know more? Log in or sign
                            up for access to additional features and data!
                        </p>
                        <a className="waves-effect waves-light btn-small create">
                            create account
                        </a>
                    </div>
                </div>
            )}

            {/* <div className="row infoCreate">
                <div className="col s12 houseCreate">
                    <p>
                        Like what you see? Want to know more? Log in or sign up
                        for access to additional features and data!
                    </p>
                    <a className="waves-effect waves-light btn-small create">
                        create account
                    </a>
                </div>
            </div> */}
        </div>
    );
}

export default SelectedPlant;
