import React from "react";
import "./styles.css";
import Card from "./../card/card";

function SearchResults(props) {
    const data = props.results;
    return (
        <div>
            <div className="row1">
                <h4>Your Results</h4>
            </div>
            {[...data].map((plant) => (
                <Card
                    key={plant.id}
                    id={plant.id}
                    common_name={plant.common_name}
                    cardClick={props.cardClick}
                />
            ))}
        </div>
    );
}

export default SearchResults;
