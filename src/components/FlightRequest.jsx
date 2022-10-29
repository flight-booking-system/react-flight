import axios from "axios";
import React from 'react'
import "../styles/styles.css";
import { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";

const FlightRequest = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [date, setDate] = useState("");
    const [adult, setAdult] = useState("");
    const [submit, setSubmit] = useState(false);

    const [flights,setFlights] = useState("");
    const [bookFlight,setBookFlight] = useState("");
    
    const options = {
        method: 'GET',
        url: 'https://flight-fare-search.p.rapidapi.com/v2/flight/',
        params: {
            from,
            to,
            date,
            adult,
            type: 'economy',
            currency: 'USD'
        },
        headers: {
        'X-RapidAPI-Key': '1b85cf5c2dmshb1a1bebd8c1b3bap1ee271jsn842fa614bef4',
        'X-RapidAPI-Host': 'flight-fare-search.p.rapidapi.com'
        }
    };

    useEffect(()=>{
        if(submit && from && to && date && adult){
            axios.request(options).then(function (response) {
                setFlights(response.data);
            }).catch(function (error) {
                console.error(error);
            });
        }
    },[submit])

    const bookFlights = event => {
        event.preventDefault();
        navigate('/home');
    }
    
    return (
        <>
            <h1>Search Flights</h1>
            {   !flights && ( 
                <>
                <form>
                <div class="elem-group">
                    <label for="name">Name</label>
                    <input type="text" id="name" name="visitor_name" placeholder="Your name" required onChange={data => setName(data.target.value)}/>
                </div>
                <hr/>
                <div class="elem-group inlined">
                    <label for="adult">Adults</label>
                    <input type="number" id="adult" name="total_adults" placeholder="1" min="1" required onChange={data => setAdult(data.target.value)}/>
                </div>
                <div class="elem-group inlined">
                    <label for="adult">Date</label>
                    <input type="date" id="date" name="date" required onChange={data => setDate(data.target.value)}/>
                </div>
                <div class="elem-group inlined">
                    <label for="from">From</label>
                    <input type="text" id="datefrom-date" name="from" required placeholder="Type airport code" onChange={data => setFrom(data.target.value)}/>
                    <label for="to">To</label>
                    <input type="text" id="dateto-date" name="to" required placeholder="Type airport code" onChange={data => setTo(data.target.value)}/>
                </div>
                </form>
                <button onClick={() => setSubmit(true)}>Search</button>
                </>
            )}
            {
                flights && (
                    <div>
                        <h3>Available Flights</h3>
                        {flights.map((flight, index) => {
                            return (
                                console.log(flight)
                            )
                        })}
                        <button onClick={bookFlights}>
                            Book
                        </button>
                    </div>
                )
            }
        </>
    )
}

export default FlightRequest