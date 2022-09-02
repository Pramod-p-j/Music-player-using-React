import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./components/Home";
import Menu from "./components/Menu";
import Pnf from "./components/Pnf";
import Track from "./components/Track";

import { ToastContainer } from 'react-toastify'
// import 'react-toastify/scss/main.scss'
import 'react-toastify/dist/ReactToastify.min.css'

function App() {
  return (
    <Router>
        <Menu/>
        <ToastContainer autoClose={5000} position={"top-right"} />
        <Routes>
          <Route path={`/`} element={<Home/>} />
          <Route path={`/home`} element={<Home/>} />
          <Route path={`/tracks/:id`} element={<Track/>} />
          <Route path={`/*`} element={<Pnf/>} />
        </Routes>
    </Router>
  );
}

export default App;
