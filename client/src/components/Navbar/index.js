import React from "react";
import { Link } from "react-router-dom";
import Checkout from "../Checkout";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
    return (


        <nav className="navbar navbar-expand-lg text-light">
            <div className="container d-flex justify-content-center">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link
                            to="/saved"
                            className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
                        >Today</Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/search"
                            className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
                        >Search</Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/AddClient"
                            className={window.location.pathname === "/AddClient" ? "nav-link active" : "nav-link"}
                        >New Client</Link>
                    </li>
                    <li className="nav-item">
                        <Checkout />
                    </li>
                </ul>
            </div>
        </nav>

    );
}

export default Navbar;