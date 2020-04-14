import React from "react";
import "./styles.css";
import image from "./../../assets/roses.png";

function selectedPlant() {
    return (
        <div>
            <div className="row plantName">
                <h4>Planticus Name</h4>
            </div>

            <div className="row">
                <div className="col imageHere">
                    <img src={image} alt="roses" />
                </div>
            </div>

            <div className="row imgSave">
                <div className="col s12 houseSave">
                    <a className="waves-effect waves-light btn-small save">
                        Save
                    </a>
                </div>
            </div>

            <div className="row saveInfo">
                <div className="col s3">
                    <i className="far fa-sun sunicon"></i>
                </div>
                <div className="col s9 sun">sunlight</div>
            </div>

            <div className="row rowWater">
                <div className="col s3">
                    <i className="fas fa-tint watericon"></i>
                </div>
                <div className="col s9 water">water amount</div>
            </div>

            <div className="row rowTemp">
                <div className="col s3">
                    <i className="fas fa-temperature-high tempicon"></i>
                </div>
                <div className="col s9 temp">temperature</div>
            </div>

            <div className="row infoCreate">
                <div className="col s12 houseCreate">
                    <a className="waves-effect waves-light btn-small create">
                        create account
                    </a>
                </div>
            </div>
        </div>
    );
}

export default selectedPlant;
