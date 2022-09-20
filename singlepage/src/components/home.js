import React from "react";
import {Link} from "react-router-dom";

export default function Home() {
    return (
        <>
        <div>Home Page</div>
        <Link to="/about">About Page</Link><br/>
        <Link to="/ContactUs">Contact Us</Link>
        </>
    )
    
}