import React from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';



function NavBar() {
    return (
                <ul className="nav d-flex justify-content-around">
                    <li className="nav-item"><a class="navBtn" href="/">NOTES TO SELF</a></li>
                    <li className="nav-item"><a class="navBtn" href="/Search">SEARCH</a></li>
                    <li className="nav-item"><a class="navBtn" href="/NewClient">NEW CLIENT</a></li>
                    <li className="nav-item"><a class="navBtn" href="/Charge">CHARGE CLIENT</a></li>
                    <li className="nav-item"><a class="navBtn" href="/Message">MESSAGE CLIENTS</a></li>
                    <li className="nav-item"><a class="navBtn" href="https://www.instagram.com/ali_atthesalon/">Ali_AtTheSalon</a></li>
                </ul>
    )
}
export default NavBar;


