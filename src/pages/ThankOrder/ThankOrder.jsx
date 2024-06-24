import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useCart } from '../../components/Cart/CartContext'; // Adjust the import path as needed

const ThankOrder = () => {
  const location = useLocation();
  const { formData, cart } = location.state;
  const { clearCart } = useCart(); // Using the clearCart function from CartContext

  const orderNumber = Math.floor(100000 + Math.random() * 900000); // Generating a random order number

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <h2 className="text-3xl font-semibold mb-8">Thank you for your order!</h2>

      <div className="bg-[#f3f8f3] p-6 rounded-lg border border-dark-input w-full md:w-6/12 sm:w-6/12">
        <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
        <ul className="text-text-dark">
          {cart.map((item, index) => (
            <li key={index} className="flex items-center justify-between py-2 border-b border-gray-300">
              <div className="flex items-center">
                <img src={item.img} className="h-16 w-24" alt={item.productName} />
                <div className="ml-4">
                  <p>{item.productName}</p>
                  <p>{item.price}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-4">
          <hr className="border-spacing-xl border-dark-bg mb-4" />
          <div className="text-text-dark text-center">
            <p className="mb-2">Order Number: {orderNumber}</p>
            <p className="mb-2">Shipping Address: {formData.address}, {formData.city}, {formData.governorate}, {formData.postalCode}</p>
            <p className="mb-2">Email: {formData.email}</p>
            <p>Total Amount: {formData.totalAmount} EGP</p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <Link to="/" onClick={clearCart}>
          <button className="bg-text-yellow text-white text-xl p-4 rounded-lg hover:bg-yellow-500">
            Return to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ThankOrder;
