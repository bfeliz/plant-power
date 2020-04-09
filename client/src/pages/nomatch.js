import React from "react";
import "./nomatch.css";
import image from "./../assets/roses.png";

function NoMatch() {
    return (
        <div>
            <h1>404 Page Not Found</h1>
            <h3>Please try your search again</h3>
            <h3 className="flow-text">
                In the meantime, you can take a moment to stop and smell the
                roses...
            </h3>
            <img src={image} alt="roses" />
        </div>
    );
}

export default NoMatch;
