import React from "react";
import "./header.css"; // Import CSS for styling
import { Link } from "react-router-dom";

const Header = () => {

    return (
        <header className="header">
            <nav className="nav">
                <ul className="nav-list">

                    <li >
                        <Link className="nav-item" to="/">Home</Link>
                    </li>
                    <li >
                        <Link  className="nav-item" to="/api/data">Data</Link>
                    </li>
                    <li >
                        <Link className="nav-item" to="/config">Config</Link>
                    </li>
                    <li >
                        <Link className="nav-item" to="/preview">Preview</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
