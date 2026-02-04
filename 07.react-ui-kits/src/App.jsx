import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import "./App.css";
import "./index.css";
import Counter from "./components/Counter";
import { useRef } from "react";
function App() {

   const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>

      <hr />


      <Counter />

      <hr />
       <input ref={inputRef} />
      <button onClick={handleFocus}>Focus et</button>
    </>
  );
}

export default App;
