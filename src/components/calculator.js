import React, { useState } from "react";
import "./calculator.css";

const Calcualtor = () => {
    const [years,setYears]=useState("");
    const[months,setMonths]=useState("");
    const[days,setDays]=useState("");

    return (
        <div className="cover">
            <h1>Age Calculator</h1>
            <input type="date" className="birthday-date" />
            <button type="submit" className="calculate-btn">calculate</button>
            <p>your age is {years} years {months} months and  {days} days</p>
        </div>
    )
};

export default Calcualtor;