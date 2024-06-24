import React, { useState, useEffect } from 'react';
import { useCart } from '../Cart/CartContext';
import ProductDetails from '../../pages/ProductDetails/ProductDetails';
import { useNavigate } from 'react-router-dom';

const Products = ({ showAdditionalSection = true }) => {
    const { addToCart } = useCart();
    const [data, setData] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const navigate = useNavigate();

    const getData = () => {
        fetch('http://localhost:3000/', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(myJson => setData(myJson));
    }

    useEffect(() => {
        getData();
    }, []);

    const handleProductClick = (product) => {
        // Replace spaces with dashes in product name
        const productNameSlug = product.productName.replace(/\s+/g, '-').toLowerCase();
        setSelectedProduct(product);
        navigate(`/productdetails/${productNameSlug}`, { state: { product } });
    };

    const handleCloseProductDetails = () => {
        setSelectedProduct(null);
    };

    const handleSeeMoreClick = (category) => {
        navigate(`/collections/${category}`);
    };


    return (
        <div>
            {selectedProduct ? (
                <div>
                    <button onClick={handleCloseProductDetails}>Close</button>

                    <ProductDetails product={selectedProduct} />
                </div>
            ) : (
                <div>
                    {Object.keys(data).map(category => (
                        <div key={category} className='mt-2xl mb-4xl'>
                            <h2 className='flex justify-center text-2xl mb-2xl'>{category}</h2>
                            <div className='product grid grid-cols-3 gap-4 items-center mx-l sm:grid-cols-2 md:text-center sm:text-center'>
                                {Object.keys(data[category]).map(productKey => {
                                    const product = data[category][productKey];
                                    const isSoldOut = product.AddButton.toLowerCase() === 'sold out';
                                    return (
                                        <div key={productKey} className='flex flex-col items-center mb-2xl '>
                                            <img src={product.img} className='h-auto w-96 max-h-64 cursor-pointer mb-l' alt={product.productName} onClick={() => handleProductClick(product)} />
                                            <p>{product.TradeName}</p>
                                            <p>{product.productName}</p>
                                            <p>{product.price} <del className='ms-l line-through'>{product.Discountprice}</del></p>
                                            <div className='mt-xl'>
                                            <button 
                                                    className={`bg-dark-bg text-white px-3xl py-l hover:bg-text-yellow h-auto w-full sm:px-2xl sm:py-m ${isSoldOut ? 'bg-disable-btn cursor-not-allowed hover:bg-disable-btn' : ''}`} 
                                                    onClick={() => !isSoldOut && addToCart(product)}
                                                    disabled={isSoldOut}
                                                >
                                                    {product.AddButton}
                                                </button>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                            {showAdditionalSection && (
                                <>
                                    <div className="see-more flex justify-center text-text-yellow text-xl font-medium mt-xl mb-xl sm:text-lg">
                                        <button onClick={() => handleSeeMoreClick(category)} className='hover:underline'>
                                            See more {category} &#62;
                                        </button>
                                    </div>
                                    <div>
                                        <hr className='border-spacing-xl border-dark-bg' />
                                    </div>
                                </>
                            )}

                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Products;
