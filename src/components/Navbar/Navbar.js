import React from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';



function Navbar() {
    return (
            <nav id="sidebar">
                <ul class="list-unstyled components">
                    <hr /><li><a href="/">SEARCH</a></li><hr />
                    <li><a href="/Notes">NOTES TO SELF</a></li><hr />
                    <li><a href="/NewClient">NEW CLIENT</a></li><hr />
                    <li><a href="/Charge">CHARGE CLIENT</a></li><hr />
                    <li><a href="/Message">MESSAGE CLIENTS</a></li><hr />
                </ul>
                <footer>
                    |<a href="https://www.instagram.com/ali_atthesalon/">Ali_AtTheSalon</a>|
            </footer>
            </nav>
    )
}
export default Navbar;