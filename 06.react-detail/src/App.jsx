import { Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductDetails from "./pages/ProductDetails";
import CreateProduct from "./pages/CreateProduct";

function App() {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/create" element={<CreateProduct />} />
      </Routes>
    </div>
  );
}

export default App;
