import React from "react";
import "./style.css";

function selectedPlant () {
    return (
        <div
        className="container">
            <div className="row plantName">
                HelloGreen!
            </div>
            <div className="row">
                <div className="col imageHere">
                    <a href="assets/succ2.jpg"></a>
                </div>
            </div>
            <div className="row saveBtn">
                <div className="col-md-12"> 
                <button type="button">
                    save
                </button>
                </div>    
            </div>
            <div className="row">
                <div className="col-md-6">
                    sun icon
                </div>
                <div className="col-md-6">
                    weather
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    water icon
                </div>
                <div className="col-md-6">
                    water 
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    temp icon
                </div>
                <div className="col-md-6">
                    temperature
                </div>
            </div>
            <div className="row createAccount">
                link to create account
            </div>
        </div>
    );
}

export default selectedPlant