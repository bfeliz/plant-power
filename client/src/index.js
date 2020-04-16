import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import { Auth0Provider } from "./react-auth0-spa";
import config from "./auth_config.json";
import App from "./App";
import history from "./utils/history";

const onRedirectCallback = (appState) => {
    history.push(
        appState && appState.targetUrl
            ? appState.targetUrl
            : window.location.pathname
    );
};

ReactDOM.render(
    <Router>
        <Auth0Provider
            domain={config.domain}
            client_id={config.clientId}
            audience={config.audience}
            redirect_uri={window.location.origin}
            onRedirectCallback={onRedirectCallback}
        >
            <App />
        </Auth0Provider>
        ,
    </Router>,

    document.getElementById("root")
);
