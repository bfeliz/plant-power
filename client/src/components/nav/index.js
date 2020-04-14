import React from "react";
import "./style.css";

import { useAuth0 } from "../../react-auth0-spa";
//import isAuthenticated from "../react-auth0-spa";

import { NavItem, Button } from "reactstrap";

function Navbar(props) {
    const { isAuthenticated, loginWithPopup, logout } = useAuth0();
    return (
        <div>
            <nav>
                <div className="nav-wrapper">
                    <div className="title left flow-text">Plant Power</div>

                    {!isAuthenticated && (
                        <NavItem>
                            <Button
                                id="qsLoginBtn"
                                color="primary"
                                className="btn-margin"
                                onClick={() => loginWithPopup({})}
                            >
                                Log in
                            </Button>
                        </NavItem>
                    )}

                    {isAuthenticated && (
                        <NavItem>
                            <Button
                                id="qsLoginBtn"
                                color="primary"
                                className="btn-margin"
                                onClick={() => logout()}
                            >
                                Log out
                            </Button>
                        </NavItem>
                    )}

                    <form onSubmit={props.handleFormSubmit}>

                        <div className="input-field right search-bar">
                            <input
                                id="search"
                                type="search"
                                placeholder="Type plant name here"
                                onChange={props.handleInputChange}
                                value={props.search}
                                name="search"
                                required
                            />
                            <label className="label-icon">
                                <i className="material-icons">search</i>
                            </label>
                            <i className="material-icons" id="close-icon">
                                close
                            </i>
                        </div>
                    </form>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
