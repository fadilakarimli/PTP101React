import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateProduct = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    image: "",
    isDiscounted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:3000/products", {
      ...formData,
      price: Number(formData.price),
    });

    navigate("/");
  };

  return (
    <div className="max-w-md mx-auto border p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Create Product</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Product name"
          className="w-full border p-2 rounded"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          className="w-full border p-2 rounded"
          value={formData.price}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          className="w-full border p-2 rounded"
          value={formData.image}
          onChange={handleChange}
          required
        />

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="isDiscounted"
            checked={formData.isDiscounted}
            onChange={handleChange}
          />
          Discounted
        </label>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
