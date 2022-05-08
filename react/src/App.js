import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./Products";
import AddProducts from "./AddProducts";


export default function App() {

    return (
        <div>
            <BrowserRouter>
                <Routes>

                    <Route path="/" element={<Products />} />
                    <Route path="/addproduct" element={<AddProducts />} />

                </Routes>
            </BrowserRouter>
        </div>
    )
}