import logo from "./logo.svg";
import "./App.css";
import { Routes, BrowserRouter, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React
                </a>
                {/* <Link to="/home">Click to Home</Link> */}
              </header>
            </div>
          }
        />
        <Route path="/home" element={<div>This is a Home Page</div>} />
        {/* <Route path=":ROOM_ID" element={<Video />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
