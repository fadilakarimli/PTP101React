import { FaInfoCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div className="border rounded-lg p-4 shadow-md relative">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover mb-3"
      />

      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-600">${product.price}</p>

      {product.isDiscounted && (
        <span className="inline-block mt-2 px-3 py-1 text-sm bg-red-500 text-white rounded">
          Discount
        </span>
      )}

      {/* DETAILS ICON */}
      <FaInfoCircle
        className="absolute top-3 left-3 text-2xl text-blue-600 cursor-pointer hover:scale-110 transition"
        onClick={() => navigate(`/products/${product.id}`)}
      />
    </div>
  );
};

export default ProductCard;
