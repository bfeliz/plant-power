import React from "react";
import "./styles.css";
import image from "./../../assets/roses.png";

function searchResults(props) {
    const data = props.results;
    return (
        <div>
            <div className="row1">
                <h4>Your Results</h4>
            </div>
            {[...data].map((plant) => (
                <div className="row">
                    <div className="col s12">
                        <div className="card">
                            <div className="card-content">
                                <span className="card-title">
                                    {plant.common_name}
                                </span>
                                <p>Click for more info</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default searchResults;
