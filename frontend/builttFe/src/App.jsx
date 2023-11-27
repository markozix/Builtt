import React from 'react'
import './App.css'
import Login from "./pages/Login";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    exact
                    path="/"
                    element={<Login />}
                />
                <Route
                    exact
                    path="/shop"
                    element={<Shop />}
                />
                <Route
                    exact
                    path="/cart"
                    element={<Cart />}
                />
            </Routes>
        </BrowserRouter>
    )
}

export default App
