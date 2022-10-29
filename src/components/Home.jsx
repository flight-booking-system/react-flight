import React from 'react'
import { Link } from "react-router-dom";
import "../styles/styles.css";

const Home = () => {
  return (
    <>
        <h1>Flight Booking System</h1>
        <nav id='menu'>
            <ul>
            <Link
                to="/flightreq"
                onClick={() => {}}
                className="links"
              >
                <li>Search Flight</li>
            </Link>
            <Link
                to="/mybookings"
                onClick={() => {}}
                className="links"
              >
                <li>My Bookings</li>
            </Link>
            <Link
                to="/about"
                onClick={() => {}}
                className="links"
              >
                <li>About</li>
            </Link>
            <Link
                to="/contactus"
                onClick={() => {}}
                className="links"
              >
                <li>Contact Us</li>
            </Link>
            <Link
                to="/register"
                onClick={() => {}}
                className="links"
              >
                <li style={{float:"right"}}>Register/Login</li>
            </Link>
            </ul>
        </nav>
    </>
  )
}

export default Home