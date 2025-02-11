import React from "react";
import dumbellset from "../images/dumbellset.jpeg";
import treadmill from "../images/treadmill.jpg";
import Kettlebells from "../images/Kettlebells.jpeg";
import ProtienShake from "../images/protien_powder.jpeg";
import Yogamat from "../images/yoga_mat.jpg";
import JumpRope from "../images/JumpRope.jpg";
import ResistanceBands from "../images/ResistanceBands.jpg";
import Pullupbar from "../images/pullupbar.jpeg";
import { Link } from 'react-router-dom';
const products = [
  {
    id: 1,
    name: "Dumbbells Set",
    price: "$50",
    image: dumbellset,
  },
  {
    id: 2,
    name: "Treadmill",
    price: "$400",
    image: treadmill,
  },
  {
    id: 3,
    name: "Kettlebell",
    price: "$30",
    image: Kettlebells,
  },
  {
    id: 4,
    name: "Resistance Bands",
    price: "$20",
    image: ResistanceBands,
  },
  {
    id: 5,
    name: "Protein Shake",
    price: "$25",
    image: ProtienShake,
  },
  {
    id: 6,
    name: "Yoga Mat",
    price: "$15",
    image: Yogamat,
  },
  {
    id: 7,
    name: "Pull-Up Bar",
    price: "$45",
    image: Pullupbar,
  },
  {
    id: 8,
    name: "Jump Rope",
    price: "$10",
    image: JumpRope,
  }
];

export default function Products() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Gym Products</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="bg-white p-4 rounded-lg shadow-md text-center transform transition duration-300 hover:scale-105"
          >
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-32 h-32 object-cover rounded-md mx-auto"
            />
            <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
            <p className="text-gray-600 text-lg font-bold">{product.price}</p>
            <Link to="/cart">
        <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Add to Cart
        </button>
      </Link>
          </div>
        ))}
      </div>
    </div>
  );
}