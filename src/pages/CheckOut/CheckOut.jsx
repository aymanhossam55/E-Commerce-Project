// CheckOut.js
import React, { useState , useEffect } from 'react';
import { useCart } from '../../components/Cart/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import CheckOutbg from '../../assets/Checkoutbg.webp';

const CheckOut = () => {
  const { cart, removeFromCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [showSummary, setShowSummary] = useState(true);
  const [formCompleted, setFormCompleted] = useState(false);

  const totalPrice = cart.reduce((total, item) => {
    const price = parseFloat(item.price.replace(/[,]/g, '')); // Remove $ and commas
    return total + price;
  }, 0).toFixed(2);

  // Format total price with commas
  const formattedTotalPrice = Number(totalPrice).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const [formData, setFormData] = useState({
    email: '',
    deliveryOption: 'Egypt',
    firstName: '',
    lastName: '',
    address: '',
    apartment: '',
    city: '',
    governorate: 'Cairo',
    postalCode: '',
    saveInfo: false,
    shippingMethod: 'Standard - 3 to 5 business days',
    paymentMethod: 'COD',
    billingAddressOption: 'SameAddressshipping',
    totalAmount: totalPrice
  });

  useEffect(() => {
    // Check if all required fields are filled to enable form submission
    if (
      formData.email &&
      formData.firstName &&
      formData.lastName &&
      formData.address &&
      formData.city &&
      formData.postalCode &&
      cart.length > 0
    ) {
      setFormCompleted(true);
    } else {
      setFormCompleted(false);
    }
  }, [formData]);


  const toggleSummary = () => {
    setShowSummary(!showSummary);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle('cart-menu-open');
  };

  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission, save order details, etc.
    navigate('/thankorder', { state: { formData, cart } });
  };




  return (
    <div>
      <div className="relative">
        <img className="w-full h-20vh object-cover" src={CheckOutbg} alt="CheckOutbg" />
      </div>
      <div className="ms-12xl flex md:mx-0 sm:mx-0 md:flex-wrap-reverse sm:flex-wrap-reverse">
        <form onSubmit={handleFormSubmit} className="w-6/12 md:w-full sm:w-full p-3 mt-xl me-2xl md:mx-6xl sm:mx-2xl">
          <label htmlFor="contact" className="block mb-2 text-xl font-semibold">
            Contact
          </label>
          <input
            type="email"
            id="contact"
            placeholder="Email"
            className="border border-grey-input rounded-lg text-text-dark w-full p-3 mb-4"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />

          <label htmlFor="delivery" className="block text-xl font-semibold mb-2">
            Delivery
          </label>
          <select
            id="Delivery"
            className="border border-grey-input text-text-dark w-full p-3 mb-4 rounded-lg"
            value={formData.deliveryOption}
            onChange={(e) => setFormData({ ...formData, deliveryOption: e.target.value })}
          >
            <option value="Egypt">Egypt</option>
          </select>

          <div className="flex">
            <input
              type="text"
              id="FirstName"
              placeholder="First Name"
              className="border border-grey-input rounded-lg text-text-dark w-full p-3 me-xl mb-4"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            />
            <input
              type="text"
              id="LastName"
              placeholder="Last Name"
              className="border border-grey-input rounded-lg text-text-dark w-full p-3 mb-4"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            />
          </div>
          <input
            type="text"
            id="address"
            placeholder="Address"
            className="border border-grey-input rounded-lg text-text-dark w-full p-3 mb-4"
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
          />

          <input
            type="text"
            id="Apartment"
            placeholder="Apartment, suite, etc. (optional)"
            className="border border-grey-input rounded-lg text-text-dark w-full p-3 mb-4"
            value={formData.apartment}
            onChange={(e) => setFormData({ ...formData, apartment: e.target.value })}
          />

          <div className="flex sm:flex-wrap">
            <input
              type="text"
              id="city"
              placeholder="City"
              className="border border-grey-input rounded-lg text-text-dark w-full me-xl sm:me-0 p-3 mb-4"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            />

            <select
              type="text"
              id="Governorate"
              placeholder="Governorate"
              className="border border-grey-input rounded-lg text-text-dark w-full me-xl sm:me-0 p-3 mb-4"
              value={formData.governorate}
              onChange={(e) => setFormData({ ...formData, governorate: e.target.value })}
            >
              <option value="6th of October">6th of October</option>
              <option value="Al Sharqia">Al Sharqia</option>
              <option value="Alexandria">Alexandria</option>
              <option value="Aswan">Aswan</option>
              <option value="Asyut">Asyut</option>
              <option value="Beheira">Beheira</option>
              <option value="Beni Suef">Beni Suef</option>
              <option value="Cairo">Cairo</option>
              <option value="Dakahlia">Dakahlia</option>
              <option value="Damietta">Damietta</option>
              <option value="Faiyum">Faiyum</option>
              <option value="Gharbia">Gharbia</option>
              <option value="Giza">Giza</option>
              <option value="Helwan">Helwan</option>
              <option value="Ismailia">Ismailia</option>
              <option value="Kafr el-Sheikh">Kafr el-Sheikh</option>
              <option value="Luxor">Luxor</option>
              <option value="Matrouh">Matrouh</option>
              <option value="Minya">Minya</option>
              <option value="Monufia">Monufia</option>
              <option value="New Valley">New Valley</option>
              <option value="North Sinai">North Sinai</option>
              <option value="Port Said">Port Said</option>
              <option value="Qalyubia">Qalyubia</option>
              <option value="Qena">Qena</option>
              <option value="Red Sea">Red Sea</option>
              <option value="Sohag">Sohag</option>
              <option value="South Sinai">South Sinai</option>
              <option value="Suez">Suez</option>
            </select>

            <input
              type="text"
              id="postalcode"
              placeholder="Postal Code"
              className="border border-grey-input rounded-lg text-text-dark w-full p-3 mb-4"
              value={formData.postalCode}
              onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
            />
          </div>

          <div className="mb-l">
            <input
              type="checkbox"
              id="save"
              className="border rounded-lg text-text-dark accent-dark-bg me-m mb-4 h-4 w-4"
              checked={formData.saveInfo}
              onChange={(e) => setFormData({ ...formData, saveInfo: e.target.checked })}
            />
            <label htmlFor="save" className="text-lg">
              Save this information for next time
            </label>
          </div>

          <div className="mb-2xl">
            <h2 className="text-xl font-semibold mb-m">Shipping method</h2>
            <section className="flex justify-between px-l bg-[#f3f8f3] p-3 rounded-lg border border-dark-input">
              <p>{formData.shippingMethod} (Weekends and Holidays not included)</p>
              <p>E£79.00</p>
            </section>
          </div>

          <div className="mb-2xl">
            <h2 className="text-xl font-semibold">Payment</h2>
            <p className="mb-l">All transactions are secure and encrypted.</p>
            <section className="flex flex-col px-l bg-[#f3f8f3] p-3 rounded-lg border border-dark-input">
              <div>
                <input
                  type="radio"
                  id="PaymentMethod"
                  name="payment"
                  className="border rounded-lg accent-dark-bg text-text-dark p-3 mb-4 border-dark-input h-4 w-4"
                  checked={formData.paymentMethod === 'Cards'}
                  onChange={() => setFormData({ ...formData, paymentMethod: 'Cards' })}
                />
                <label htmlFor="PaymentMethod" className="text-lg ms-m">
                  Pay via (Debit/Credit cards/Wallets/Installments)
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="COD"
                  name="payment"
                  className="border rounded-lg accent-dark-bg text-text-dark p-3 mb-4 h-4 w-4"
                  checked={formData.paymentMethod === 'COD'}
                  onChange={() => setFormData({ ...formData, paymentMethod: 'COD' })}
                />
                <label htmlFor="COD" className="text-lg ms-m">Cash on Delivery (COD)</label>
              </div>
            </section>
          </div>

          <h2 className="text-xl font-semibold mb-l">Billing address</h2>
          <section className="flex flex-col px-l bg-[#f3f8f3] p-3 rounded-lg border border-dark-input">
            <div>
              <input
                type="radio"
                id="SameAddressshipping"
                name="address"
                className="border rounded-lg accent-dark-bg text-text-dark p-3 mb-4 h-4 w-4"
                checked={formData.billingAddressOption === 'SameAddressshipping'}
                onChange={() => setFormData({ ...formData, billingAddressOption: 'SameAddressshipping' })}
              />
              <label htmlFor="SameAddressshipping" className="text-lg ms-m">Same as shipping address</label>
            </div>
            <div>
              <input
                type="radio"
                id="DiffAddressshipping"
                name="address"
                className="border rounded-lg accent-dark-bg text-text-dark p-3 mb-4 h-4 w-4"
                checked={formData.billingAddressOption === 'DiffAddressshipping'}
                onChange={() => setFormData({ ...formData, billingAddressOption: 'DiffAddressshipping' })}
              />
              <label htmlFor="DiffAddressshipping" className="text-lg ms-m">Use a different billing address</label>
            </div>
          </section>

          <div className="mt-xl">
            <button
              type="submit"
              className={`bg-text-yellow text-white text-xl p-4 rounded-lg w-full hover:bg-yellow-500 ${formCompleted ? '' : 'opacity-50 cursor-not-allowed'
                }`}
              disabled={!formCompleted}
            >Complete Order</button>
          </div>
        </form>

        <div className="cart-menu w-6/12 md:w-full sm:w-full md:mx-0 sm:mx-0 bg-grey-bg">
          <div className="text-lg font-semibold w-full p-4 text-center justify-between items-center hidden md:flex sm:flex  md:px-6xl sm:px-2xl">
            <div className='flex cursor-pointer' onClick={toggleMenu}>
              <button>
                {isOpen ? 'Hide Order Summary' : 'Show Order Summary'}
              </button>
              <svg className={`w-8 h-8 ${isOpen ? 'transform rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M13.293 6.293a1 1 0 0 0-1.414 1.414L10 10.414l-1.879-1.88a1 1 0 1 0-1.414 1.414l3.57 3.57a1 1 0 0 0 1.414 0l3.57-3.57a1 1 0 1 0-1.414-1.414L10 10.586l1.293-1.293a1 1 0 0 0 0-1.414z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <span className="ml-2">{formattedTotalPrice} EGP</span>
            </div>
          </div>
          {/* <div className="text-center my-4">
            <button
              className="bg-text-yellow text-white text-xl p-2 rounded-lg hover:bg-yellow-500"
              onClick={toggleSummary}
            >
              {showSummary ? 'Hide Summary' : 'Show Summary'}
            </button>
          </div> */}
          {isOpen && (
            <ul className="py-2xl text-text-dark">
              {cart.map((item, index) => (
                <div key={index} className="flex items-center mx-xl mb-2xl">
                  <img src={item.img} className="h-16 w-24" alt={item.productName} />
                  <div className="text-center mx-auto">
                    <p>{item.productName}</p>
                    <p>
                      {item.price}
                      <del className="ms-l line-through">{item.Discountprice}</del>
                    </p>
                    <button
                      className='underline text-text-dark cursor-pointer'
                      onClick={() => removeFromCart(index)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
              <div>
                <hr className="border-spacing-xl border-dark-bg mb-xl" />
              </div>
              <div className="text-text-dark text-center flex flex-col justify-center">
                <small className="uppercase text-stone-500 mb-l">Subtotal</small>
                <p className="mb-l text-2xl">{formattedTotalPrice} EGP</p>
                <p className="mb-l">
                  Tax included. <span className="underline cursor-pointer">Shipping</span> calculated at checkout.
                </p>
              </div>
            </ul>
          )}
          {!isOpen && showSummary && (
            <ul className="py-2xl text-text-dark">
              {cart.map((item, index) => (
                <div key={index} className="flex items-center mx-xl mb-2xl md:hidden sm:hidden">
                  <img src={item.img} className="h-16 w-24" alt={item.productName} />
                  <div className="text-center mx-auto">
                    <p>{item.productName}</p>
                    <p>
                      {item.price}
                      <del className="ms-l line-through">{item.Discountprice}</del>
                    </p>
                    <button
                      className='underline text-text-dark cursor-pointer'
                      onClick={() => removeFromCart(index)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
              <div>
                <hr className="border-spacing-xl border-dark-bg mb-xl" />
              </div>
              <div className="text-text-dark text-center flex flex-col justify-center">
                <small className="uppercase text-stone-500 mb-l">Subtotal</small>
                <p className="mb-l text-2xl">{formattedTotalPrice} EGP</p>
                <p className="mb-l">
                  Tax included. <span className="underline cursor-pointer">Shipping</span> calculated at checkout.
                </p>
                <Link to='/cart'>
                  <div className='mt-xl'>
                    <button className='bg-dark-bg text-white px-3xl py-l hover:bg-text-yellow h-auto sm:px-2xl sm:py-m'>Update Cart</button>
                  </div>
                </Link>
              </div>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
