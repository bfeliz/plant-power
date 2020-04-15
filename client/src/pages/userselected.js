import React from "react";
import "./css/selectedPlant.css";

function SelectedPlant(props) {
    return (
        <div>
            <div className="row plantName">
                <h4>{props.name}</h4>
            </div>

            <div className="row">
                <div className="col imageHere">
                    <img src={props.image} alt={props.name} />
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
                <div className="col s9 water">{props.water}</div>
            </div>

            <div className="row rowTemp">
                <div className="col s3">
                    <i className="fas fa-temperature-high tempicon"></i>
                </div>
                <div className="col s9 temp">{props.tempMin}</div>
            </div>

            <div className="row rowTemp">
                <div className="col s3">
                    <i className="fas fa-leaf"></i>
                </div>
                <div className="col s9 temp">{props.type}</div>
            </div>
            <div className="row rowTemp">
                <div className="col s3">
                    <i className="fas fa-cloud"></i>
                </div>
                <div className="col s9 temp">{props.shade}</div>
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

export default SelectedPlant;
