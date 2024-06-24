import { useState, useEffect, useRef } from "react";
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [products, setProducts] = useState({});
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const navigate = useNavigate();
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        document.body.classList.toggle('search-menu-open');
    };

    const handledelete = () => {
        setSearchQuery("");
        setFilteredProducts([]);
    }

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('/src/assets/data.json');
            const data = await response.json();
            setProducts(data);
        };

        fetchProducts();
    }, []);

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);

        if (e.target.value.length > 0) {
            const query = e.target.value.toLowerCase();
            const results = [];

            Object.keys(products).forEach(category => {
                Object.keys(products[category]).forEach(productKey => {
                    const product = products[category][productKey];
                    if (product.productName.toLowerCase().includes(query)) {
                        results.push(product);
                    }
                });
            });

            setFilteredProducts(results);
        } else {
            setFilteredProducts([]);
        }
    };

    const handleProductClick = (product) => {
        // Replace spaces with dashes in product name
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
        <div>
            <div className='search-menu'>
                <div className="flex hover:text-hover-white cursor-pointer" onClick={toggleMenu}>
                    <SearchIcon />
                    <button className="md:hidden sm:hidden">Search</button>
                </div>
                <div ref={menuRef} className={`overflow-auto fixed top-0 right-0 h-full sm:w-10/12 md:w-10/12 w-6/12 bg-white shadow-md transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <button className="absolute top-6 right-6 w-5 h-4 text-2xl text-text-dark"
                        onClick={() => { handledelete(), toggleMenu() }}>&#10005;</button>
                    <div className="p-4 text-text-dark">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={handleSearch}
                            placeholder="Search for products..."
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                        <div>
                            {selectedProduct ? (
                                <div>

                                    <ProductDetails product={selectedProduct} />
                                </div>
                            ) : (
                                <div className="mt-4">
                                    {filteredProducts.length > 0 ? (
                                        filteredProducts.map((product, index) => (
                                            <div key={index} className='flex items-center sm:flex-wrap mb-2xl'>
                                                <img src={product.img} className='h-auto w-72 max-h-64 cursor-pointer' onClick={() => handleProductClick(product)} />
                                                <div className='text-center mx-auto'>
                                                    <p>{product.productName}</p>
                                                    <p>{product.price}
                                                        <del className='ms-l line-through'>{product.Discountprice}</del>
                                                    </p>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <p>No products found</p>
                                    )}
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;
