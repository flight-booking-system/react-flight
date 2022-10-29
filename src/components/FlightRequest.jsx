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

    const [flights,setFlights] = useState();
    const [bookFlight, setBookFlight] = useState("");
    
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
        'X-RapidAPI-Key': '60573fc678msh81f6d147dcd646cp110ebbjsn79d37a3c3d52', 
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
        navigate('/payments');
    }
    
    return (
        <>
            {   
                !flights && ( 
                <>
                <h1>Search Flights</h1>
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
                    <>
                    <h1>Available Flights</h1>
                    <div>
                    {flights.map((flight, index) => {
                        return (
                            <>
                            <table border="1">
                                <tr>
                                    <th>Sn No.</th>
                                    <th>Flight Name</th>
                                    <th>Flight Number</th>
                                    <th>From Source</th>
                                    <th>To Destination</th>
                                    <th>Fare(USD)</th>
                                    <th>Duration</th>
                                    <th>Booking</th>
                                </tr>
                                <tr>
                                    <td> {index+1} </td>
                                    <td> {flights.flight_name} </td>
                                    <td>{flights.flight_code}</td>
                                    <td>{flights.departureAirport.label}</td>
                                    <td>{flights.arrivalAirport.label}</td>
                                    <td>{flight.duration.text}</td>
                                    <td>{flight.total.total} </td>
                                    <td>
                                        <button onClick={bookFlights}>
                                            Book
                                        </button>
                                    </td>
                                    
                                </tr>
                            </table>
                            </>
                        )
                    })}
                    </div>
                    </>
                )
            }
        </>
    )
}

export default FlightRequest