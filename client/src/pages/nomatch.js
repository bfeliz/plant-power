// 404 error
import React from "react";
import "./css/nomatch.css";
import image from "./../assets/roses.png";

function NoMatch() {
    return (
        <div>
            <h2>404 Page Not Found</h2>
            <h4>Please try your search again</h4>
            <h4 className="flow-text">
                In the meantime, you can take a moment to stop and smell the
                roses...
            </h4>
            <img src={image} alt="roses" />
        </div>
    );
}

export default NoMatch;
