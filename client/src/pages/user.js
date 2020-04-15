import React from "react";
import "./css/searchResults.css";
import Card from "../components/card/card";

function UserCollection() {
    // will need to make an API call to our database to get the user's specific plant names and plant ids to show in the collection, map over that instead of props
    // const data = props.results;
    return (
        <div>
            <div className="row1">
                <h4>Your Collection</h4>
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

export default UserCollection;
