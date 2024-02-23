import React from "react";
import "./Header.css";
import whole from "./whole.png";
// Import required libraries
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

function Header() {
  return (
    <div className="d-lg-block d-md-none">
      <div className="container d-none d-lg-flex align-items-center justify-content-between p-3">
        <a href="/">
          <img src={whole} alt="ATG" />
        </a>

        <div className="search">
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" />
          </form>
        </div>

        <div className="create">
          <div className="d-flex align-items-center gap-1">
            <button
              className="btn custom-btn-create p-0 m-0"
              data-bs-toggle="modal"
              data-bs-target="#exampleModalCenter"
            >
              Create Account.
              <span className="text-primary fw-bold"> It's Free </span>
            </button>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Create Account
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form className="account-creation-form">
                                {/* First Name field */}
                                <div className="mb-3">
                  <label htmlFor="firstName" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder="Enter first name"
                    required
                  />
                </div>

                {/* Last Name field */}
                <div className="mb-3">
                  <label htmlFor="lastName" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder="Enter last name"
                    required
                  />
                </div>

                {/* Email field */}
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter email"
                    required
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  />
                </div>

                {/* Password field */}
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter password"
                    required
                    minLength={8}
                  />
                </div>

                {/* Confirm password field */}
                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirmPassword"
                    placeholder="Confirm password"
                    required
                    minLength={8}
                  />
                </div>
                 {/* Signup with Google and Facebook buttons */}
              <div className="mb-3">
                <GoogleLogin
                  buttonText="Signup with Google"
                />
                <br />
                <FacebookLogin
                  autoLoad={false}
                  fields="name,email,picture"
                />
              </div>
                {/* Submit button */}
                <button type="submit" className="btn btn-primary">
                  Create Account
                </button>
              </form>
            </div>
            {/* Add a footer if needed */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
