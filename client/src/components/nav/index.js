import React from "react";
import "./style.css";

function Navbar(props) {
    return (
        <div>
            <nav>
                <div className="nav-wrapper">
                    <div className="title left flow-text">Plant Power</div>
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
