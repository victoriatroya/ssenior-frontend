import {useState} from 'react'
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";

import Login from "./pages/Login/Login.tsx";

import './App.css'

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/login" element={<Login/>}/>
            </Routes>
        </Router>
    )
}

export default App
