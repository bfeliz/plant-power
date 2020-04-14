import React from "react";

function Card(props) {
    return (
        <div className="row">
            <div className="col s12">
                <div className="card" onClick={() => props.cardClick(props.id)}>
                    <div className="card-content">
                        <span className="card-title">{props.common_name}</span>
                        <p>Click for more info</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
