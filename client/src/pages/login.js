import React from "react";

function login() {
    return (
        <div>
            <h2>Login Form</h2>
            <form class="login">
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input
                        type="email"
                        class="form-control"
                        id="email-input"
                        placeholder="email@email.com"
                    />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input
                        type="password"
                        class="form-control"
                        id="password-input"
                        placeholder=""
                    />
                </div>
                <button
                    type="submit"
                    class="btn btn-default cyan lighten-1 waves-effect waves-light"
                >
                    Login
                </button>
            </form>
            <p>
                Or sign up{" "}
                <a class="here" href="/signin">
                    here
                </a>
            </p>
            <br></br>
        </div>
    );
}

export default login;
