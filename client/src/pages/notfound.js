// Displays if user search returns no results
import React from "react";
import "./css/searchResults.css";

function NotFound() {
    return (
        <div>
            <div className="row1">
                <h4>Your Results</h4>
            </div>
            <br></br>
            <h4>
                Sorry, looks like we couldn't find any plants with that name.
                Please try a new search.
            </h4>
        </div>
    );
}

export default NotFound;
