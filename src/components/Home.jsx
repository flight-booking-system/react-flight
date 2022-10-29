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
                to="/"
                onClick={() => {}}
                className="links"
              >
                <li>My Bookings</li>
            </Link>
            <Link
                to="/"
                onClick={() => {}}
                className="links"
              >
                <li>About</li>
            </Link>
            <Link
                to="/"
                onClick={() => {}}
                className="links"
              >
                <li>Contact Us</li>
            </Link>
            </ul>
        </nav>
        <h2>The Sky is Waiting for You </h2>
    </>
  )
}

export default Home