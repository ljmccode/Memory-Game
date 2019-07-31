import React from "react";
import "./navbar.css";

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
                <ul>
                    <li className="gameName">Cuteness Memory Game</li>
                    <li className="middleNav"></li>
                    <li className="score">Score: {this.props.score}</li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;