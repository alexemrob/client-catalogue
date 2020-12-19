import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
    return (
        <div className="d-flex flex-column h-100">
            <footer className="footer fixed-bottom ">
                <div className="container d-flex justify-content-center">
                    <span className="text-muted">Client Catalogue</span>
                </div>
            </footer>
        </div>
    );
}

export default Footer;