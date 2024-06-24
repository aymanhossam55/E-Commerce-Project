// CartContext.js
import React, { useState } from 'react';
import { useCart } from '../../components/Cart/CartContext';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { useNavigate } from 'react-router-dom';


const CartMenu = () => {
    const { cart, removeFromCart } = useCart();
    const [selectedProduct, setSelectedProduct] = useState(null);
    const navigate = useNavigate();

    const handleProductClick = (product) => {
        // Replace spaces with dashes in product name
        const productNameSlug = product.productName.replace(/\s+/g, '-').toLowerCase();
        setSelectedProduct(product);
        navigate(`/productdetails/${productNameSlug}`, { state: { product } });
    };

    const totalPrice = cart.reduce((total, item) => {
        const price = parseFloat(item.price.replace(/[,]/g, '')); // Remove $ and commas
        return total + price;
    }, 0).toFixed(2);

    // Format total price with commas
    const formattedTotalPrice = totalPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    return (
        <div>
            <Navbar />
            <div className='cart-menu'>
                <div className={`w-full h-full transition-transform duration-300 transform`}>
                    <div className="mx-xl p-l">
                        {cart.length === 0 ? (
                            <p className='text-text-dark text-2xl p-2xl flex justify-center'>Your cart is currently empty.</p>
                        ) : (
                            <div>
                                <p className='text-text-dark text-3xl'>Shopping Cart</p>
                                <ul className='py-2xl text-text-dark'>
                                    {cart.map((item, index) => (
                                        <>
                                            <div>
                                                {selectedProduct ? (
                                                    <div>

                                                        <ProductDetails product={selectedProduct} />
                                                    </div>
                                                ) : (
                                                    <div key={index} className='flex items-center sm:flex-wrap mb-2xl'>
                                                        <img src={item.img} className='h-auto w-72 max-h-64 cursor-pointer' onClick={() => handleProductClick(item)} />
                                                        <div className='text-center mx-auto'>
                                                            <p>{item.productName}</p>
                                                            <p>{item.price}
                                                                <del className='ms-l line-through'>{item.Discountprice}</del>
                                                            </p>
                                                            <button
                                                                className='underline text-text-dark cursor-pointer'
                                                                onClick={() => removeFromCart(index)}
                                                            >
                                                                Remove
                                                            </button>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>

                                            <div>
                                                <hr className='border-spacing-xl border-dark-bg mb-xl' />
                                            </div>
                                        </>
                                    ))}
                                </ul>

                                <div className='text-text-dark text-center flex flex-col justify-center'>
                                    <small className='uppercase text-stone-500 mb-l'>Subtotal</small>
                                    <p className='mb-l text-2xl'>{formattedTotalPrice} EGP</p>
                                    <p className='mb-l'>Tax included. <span className='underline cursor-pointer'>Shipping</span> calculated at checkout.</p>
                                    <Link to='/checkout'>
                                        <button className='bg-dark-bg text-white mx-auto px-3xl py-l hover:bg-text-yellow mb-l'>Check Out</button>
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default CartMenu