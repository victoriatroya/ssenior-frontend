import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";

import Login from "./pages/Login/Login";
import Fruits from "./pages/Fruits/Fruits";

import './App.css'

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Login/>}/>
                <Route exact path="/fruits" element={<Fruits/>}/>
            </Routes>
        </Router>
    )
}

export default App
