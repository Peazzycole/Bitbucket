import Products from "./components/Products";
import AddProducts from "./components/AddProducts";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/addproduct" element={<AddProducts />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
