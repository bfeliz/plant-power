import React from "react";
import "./css/searchResults.css";
import Card from "../components/card/card";

function UserCollection(props) {
    const data = props.userData;
    return (
        <div>
            <div className="row1">
                <h4>Your Collection</h4>
            </div>
            <br></br>
            {[...data].map((plant) => (
                <Card
                    key={plant._id}
                    id={plant.id}
                    common_name={plant.name}
                    cardClick={props.cardClick}
                />
            ))}
        </div>
    );
}

export default UserCollection;
