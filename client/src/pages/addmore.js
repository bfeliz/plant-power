import React from "react";
import "./css/searchResults.css";

function NotFound() {
    return (
        <div>
            <div className="row1">
                <h4>Your Results</h4>
            </div>
            <h3>
                You haven't saved any plants to your collection yet. Once you
                save a particular plant it will always show up here.
            </h3>
        </div>
    );
}

export default NotFound;
