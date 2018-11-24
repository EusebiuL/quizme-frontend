import React, {Component} from "react";
import axios from "axios";
import "./Home.css";
import Menu from "./Menu/Menu";
import { Link } from "react-router-dom";

class Home extends Component {
    render(){
        return (
            <div className="homeWrapper">
                <Menu />
                <h1>Grab the wheel and start quizzing!</h1>
                <Link to="/quiz" className="homeButton">Create quiz</Link>
            </div>
        );
    }
}

export default Home;