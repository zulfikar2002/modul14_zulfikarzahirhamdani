import React from "react";
import './Title.css';
import { Link } from "react-router-dom";

function Title() {
    return (
        <div>
            <div class="title">
                <h1>Netlab Bookstore</h1>
                <p>Toko Buku Paling Lengkap</p>
            </div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/about">About</Link></li>

                </ul>
            </nav>


        </div>

    )
}

export default Title