import React, { useEffect, useState } from "react";
import axios from "axios";

const DummyProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch dummy data (replace with an API endpoint if needed)
    axios
      .get("https://fakestoreapi.com/products") // Example dummy API
      //.get("https://zylalabs.com/api/392/exercise+database+api/309/list+of+body+parts")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Gym Products</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">ID</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Price</th>
            <th className="border p-2">Category</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="border">
              <td className="border p-2">{product.id}</td>
              <td className="border p-2">{product.title}</td>
              <td className="border p-2">${product.price}</td>
              <td className="border p-2">{product.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DummyProduct;
