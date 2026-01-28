import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import ProductCard from "./ProductCard";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);

  return (
    <>
      <div className="flex justify-end mb-6">
        <button
          onClick={() => navigate("/create")}
          className="px-5 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Create
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductList;
