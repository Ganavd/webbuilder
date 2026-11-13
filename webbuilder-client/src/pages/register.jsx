import React from 'react';
import { Link } from 'react-router-dom';


export default function Register() {
  return (
    <>
      {/* Form */}
      <div className="auth-panel auth-panel--right">
        <div className="auth-card">
          <div className="auth-card__header">
            <h1 className="auth-card__title">Create Account</h1>
            <p className="auth-card__subtitle">Start building your pages today</p>
          </div>

          <div className="auth-card__body">
            {/* Name field */}
            <div className="form-group">
              <label className="form-label" for="name">
                Full Name
              </label>
              <input
                className="form-input"
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                autoComplete="name"
              />
            </div>

            {/* Email field with error example */}
            <div className="form-group">
              <label className="form-label" for="email">
                Email Address
              </label>
              <input
                className="form-input form-input--error"
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                autoComplete="email"
              />
              <span className="form-error">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="6.5"
                    cy="6.5"
                    r="5.5"
                    stroke="#c0392b"
                    stroke-width="1.5"
                  />
                  <path
                    d="M6.5 4v3"
                    stroke="#c0392b"
                    stroke-width="1.5"
                    stroke-linecap="square"
                  />
                  <circle cx="6.5" cy="9" r="0.7" fill="#c0392b" />
                </svg>
                This email address is already registered.
              </span>
            </div>

            {/* Password field */}
            <div className="form-group">
              <label className="form-label" for="password">
                Password
              </label>
              <input
                className="form-input"
                type="password"
                id="password"
                name="password"
                placeholder="••••••••"
                autoComplete="new-password"
              />
              <span className="form-hint">Minimum 8 characters</span>
            </div>

            <button className="btn btn--primary btn--full" type="button">
              Create Account
            </button>
          </div>

          <div className="auth-card__footer">
            <span>Already have an account?</span>
            <Link to="/login">Sign in</Link>
          </div>
        </div>
      </div>
    </>
  );
}
