import FlightRequest from "./components/FlightRequest.jsx";
import Home from "./components/Home.jsx";
import Register from "./components/Register.jsx";
import About from "./components/About.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";
import Payment from "./components/Payment.jsx";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <div id="main-page-container">
            <Routes>
              {/* Register */}
              <Route path='/' element={<Register/>}/>
              <Route path='/register' element={<Register/>}/>

              {/* Home */}
              <Route path='/home' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>

              {/* FlightReq */}
              <Route path='/flightreq' element={<FlightRequest/>}/>
              <Route path='/payments' element={<Payment/>}/>

            </Routes>
          </div>

        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
