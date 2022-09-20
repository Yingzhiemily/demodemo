import React from "react";
import {Link} from "react-router-dom";

export default function About() {
    return (
        <>
        <div>About Page</div>
        <Link to="/">Home Page</Link><br/>
        <Link to="/ContactUs">Contact Us</Link>
        </>
    )
    
}