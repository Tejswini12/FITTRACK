import React from 'react';
import { Link } from 'react-router-dom';

function CartPage() {
  return (
    <div>
      <h1>Product added to cart successfully!</h1>
      
      <Link to="/products">
        <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Back to Shopping
        </button>
      </Link>
    </div>
  );
}

export default CartPage;