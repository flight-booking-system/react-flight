import FlightRequest from "./components/FlightRequest.jsx";
import Home from "./components/Home.jsx";
import Register from "./components/Register.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";

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

              {/* FlightReq */}
              <Route path='/flightreq' element={<FlightRequest/>}/>

            </Routes>
          </div>

        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
