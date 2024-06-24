// CartContext.js
import React, { useState } from 'react';
import { useCart } from '../Cart/CartContext';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const CartMenu = () => {
    const { cart, removeFromCart } = useCart();
    const [isOpen, setIsOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        document.body.classList.toggle('cart-menu-open');
        if (isOpen == false) {
            document.body.style = "overflow:hidden"
        } else {
            document.body.style = "overflow:auto"
        }
    };

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
        <div className='cart-menu'>
            <div className="flex hover:text-hover-white cursor-pointer" onClick={toggleMenu}>
                <ShoppingBagIcon />
                <button className="md:hidden sm:hidden">Cart-{cart.length}</button>
            </div>
            <div className={`overflow-auto fixed top-0 right-0 h-full sm:w-10/12 md:w-10/12 w-6/12 bg-white shadow-md transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <button className="absolute top-l right-l text-2xl text-text-dark" onClick={toggleMenu}>&#10005;</button>
                <div className="mx-xl p-l">
                    {cart.length === 0 ? (
                        <p className='text-text-dark text-2xl p-2xl flex justify-center'>Your cart is currently empty.</p>
                    ) : (
                        <div>
                            <p className='text-text-dark text-3xl'>Shopping Cart</p>
                            <ul className='py-2xl text-text-dark'>
                                {cart.map((item, index) => (
                                    <>
                                        <div key={index}>
                                            {selectedProduct ? (
                                                <div>
                                                    <button onClick={handleCloseProductDetails}>Close</button>

                                                    <ProductDetails product={selectedProduct} />
                                                </div>
                                            ) : (
                                                <div className='flex items-center mb-2xl sm:flex-col'>
                                                    <img src={item.img} className='h-32 w-52 cursor-pointer' onClick={() => handleProductClick(item)} />
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
                                            <hr className='border-spacing-xl border-text-dark mb-xl' />
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
    )
}

export default CartMenu