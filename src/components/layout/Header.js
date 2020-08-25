import React from "react";
import {Link} from "react-router-dom";

const headerStyle = {
    background: "#8BCCFA",
    color: "white",
    padding: "5px"
};

const linkStyle = {
  color: "white"
}

function Header() {
    return(
        <header style={headerStyle}>
            <h1>Ajankohtaista Vantaalla</h1>
            <Link to="/" style={linkStyle}>Työpaikat</Link>&nbsp;&nbsp;<Link to="/weather" style={linkStyle}>Sää</Link>
        </header>
    );
}

export default Header;
