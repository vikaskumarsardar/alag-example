import logo from "./logo.svg";
import "./App.css";
import { Routes, BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>This is a Div</div>} />
        <Route path="/home" element={<div>This is a Home Page</div>} />
        {/* <Route path=":ROOM_ID" element={<Video />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
