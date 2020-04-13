import React from "react";
import "./styles.css";
import image from "./../../assets/roses.png";

function searchResults() {
    return (
    <div>
        
    <div className="row1">
         <h4>Your Results</h4>
    </div>

    <div className="row">
    <div className="col s12 m7">
        <div className="card">      
            <div className="card-image">
                <img src={image} alt="roses" />
             </div>
            <div className="card-action">
                <a href="#">Planticus name link for more info</a>
            </div>
        </div>
    </div>
    </div>
  
    </div>
    );
}

export default searchResults;
