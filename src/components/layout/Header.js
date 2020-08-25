import React from "react";

const headerStyle = {
    background: "#8BCCFA",
    color: "white"
};

function Header() {
    return(
        <header style={headerStyle}>
            <h1>Vapaita työpaikkoja Vantaalla</h1>
        </header>
    );
}

export default Header;