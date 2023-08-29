import React from "react";
import "./calculator.css";

const Calcualtor = () => {

    return (
        <div className="cover">
            <h1>Age Calculator</h1>
            <input type="date" className="birthday-date" />
            <button type="submit" className="calculate-btn">calculate</button>
        </div>
    )
};

export default Calcualtor;