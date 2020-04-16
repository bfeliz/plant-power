import React from "react";
import "./css/searchResults.css";

function NotFound() {
    return (
        <div>
            <div className="row1">
                <h4>Your Results</h4>
            </div>
            <h3>
                Sorry, looks like we couldn't find any plants with that name.
                Please try a new search.
            </h3>
        </div>
    );
}

export default NotFound;
