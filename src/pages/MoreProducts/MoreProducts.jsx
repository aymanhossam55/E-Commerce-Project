import React, { useEffect, useState , useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './moreproducts.css';

const MoreProducts = () => {
    const { category } = useParams();
    const [isOpen, setIsOpen] = useState(false);
    const [products, setProducts] = useState([]);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const navigate = useNavigate();
    const menuRef = useRef(null);

    useEffect(() => {
        fetch('/data.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => setProducts(data[category] || []));
    }, [category]);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };


    const handleProductClick = (product) => {
        const productNameSlug = product.productName.replace(/\s+/g, '-').toLowerCase();
        setSelectedProduct(product);
        navigate(`/productdetails/${productNameSlug}`, { state: { product } });
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsOpen(false);
            document.body.classList.remove('search-menu-open');
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <>
            <Navbar />
            <div className="mx-xl mt-6xl">
                <h1 className="text-3xl font-bold mb-2xl text-center">{category}</h1>
                <div className='hidden justify-center md:flex sm:flex'>
                    <button
                        onClick={toggleSidebar}
                        className='bg-dark-bg text-text-yellow text-xl w-full h-auto px-4 py-2 rounded-lg'
                    >
                        Filter & Sort
                    </button>
                </div>
                <div ref={menuRef} className={`fixed inset-0 z-50 transition-transform transform ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden xl:hidden`}>
                    <div className='absolute inset-0 bg-gray-800 opacity-50' onClick={toggleSidebar}></div>
                    <div className='relative w-64 bg-white h-full p-4'>
                        <button
                            onClick={toggleSidebar}
                            className='absolute top-4 right-4 text-xl font-bold'
                        >
                            &#10005;
                        </button>
                        <div className='sort mb-xl'>
                            <h3 className='mb-m text-l'>Sort</h3>
                            <section className='border-l-dark-bg'>
                                <select name="sort" id="Sortselect" className='p-l border border-black w-full select-arrow-right'>
                                    <option value="1">Featured</option>
                                    <option value="2">Best Selling</option>
                                    <option value="3">Alphabetically, from a to z</option>
                                    <option value="4">Alphabetically, from z to a</option>
                                </select>
                            </section>
                        </div>
                        <div className='Filter'>
                            <h3 className='mb-m text-l'>Filter by</h3>
                            <select name="filter" id="Filterselect" className='p-l border border-black w-full select-arrow-right'>
                                <option value="1">Price, from low to high</option>
                                <option value="2">Price, from high to low</option>
                                <option value="3">Date, from old to new</option>
                                <option value="4">Date, from new to old</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='flex'>
                    <div className='w-1/4 md:hidden sm:hidden'>
                        <div className='sort mb-xl'>
                            <h3 className='mb-m text-l'>Sort</h3>
                            <section className='border-l-dark-bg'>
                                <select name="sort" id="Sortselect" className='p-l border border-black w-10/12 select-arrow-right'>
                                    <option value="1">Featured</option>
                                    <option value="2">Best Selling</option>
                                    <option value="3">Alphabetically, from a to z</option>
                                    <option value="4">Alphabetically, from z to a</option>
                                </select>
                            </section>
                        </div>
                        <div className='Filter'>
                            <h3 className='mb-m text-l'>Filter by</h3>
                            <select name="filter" id="Filterselect" className='p-l border border-black w-10/12 select-arrow-right'>
                                <option value="1">Price, from low to high</option>
                                <option value="2">Price, from high to low</option>
                                <option value="3">Date, from old to new</option>
                                <option value="4">Date, from new to old</option>
                            </select>
                        </div>
                    </div>
                    <div className="product mt-2xl grid grid-cols-3 sm:grid-cols-1 gap-4 items-center text-center">
                        {Object.keys(products).map(productKey => {
                            const product = products[productKey];
                            return (
                                <div key={productKey} className='w-full md:w-3/4 flex flex-col items-center mb-2xl'>
                                    <img
                                        src={product.img}
                                        className='h-auto w-96 max-h-64 cursor-pointer'
                                        alt={product.productName}
                                        onClick={() => handleProductClick(product)} // Add click handler
                                    />
                                    <p>{product.TradeName}</p>
                                    <p>{product.productName}</p>
                                    <p>{product.price} <del className='ms-l line-through'>{product.Discountprice}</del></p>
                                    <div className='mt-xl'>
                                        <button className='bg-dark-bg text-white px-3xl py-l hover:bg-text-yellow sm:px-2xl sm:py-m'>Add to Cart</button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default MoreProducts;
