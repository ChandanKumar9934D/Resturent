import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div style={{ textAlign: "center", padding: "50px" }}>
            <h1 style={{ fontSize: "80px", color: "red" }}>404</h1>
            <h2>Oops! Page Not Found</h2>
            <p>The page you are looking for does not exist.</p>
            <Link to="/" style={{ textDecoration: "none", fontSize: "18px", color: "blue" }}>
                Go Back to Home
            </Link>
        </div>
    );
}

export default NotFound;
