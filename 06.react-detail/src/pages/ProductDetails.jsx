import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://products-api-eta-sage.vercel.app//${id}`)
      .then((res) => setProduct(res.data))
      .catch(() => setProduct(false));
  }, [id]);

  if (product === null) return <p>Loading...</p>;
  if (product === false) return <p>Product not found ❌</p>;

  return (
    <div className="max-w-xl mx-auto border p-6 rounded-lg shadow relative">
      
      {/* BACK BUTTON */}
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-blue-600 hover:underline"
      >
        ← Back
      </button>

      <img
        src={product.image}
        alt={product.name}
        className="w-full h-60 object-cover mb-4"
      />

      <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
      <p className="text-lg text-gray-700 mb-2">
        Price: ${product.price}
      </p>

      {product.isDiscounted && (
        <span className="px-4 py-1 bg-red-500 text-white rounded">
          Discounted
        </span>
      )}
    </div>
  );
};

export default ProductDetails;
