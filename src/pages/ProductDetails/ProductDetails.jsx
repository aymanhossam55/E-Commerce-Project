import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import PinterestIcon from '@mui/icons-material/Pinterest';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { Link } from 'react-router-dom';
import { useCart } from '../../components/Cart/CartContext';

const ProductDetails = () => {

    const { addToCart } = useCart();
    const location = useLocation();
    const { product } = location.state || {};  // Destructure product from location.state

    if (!product) return null;

    const [isOpen1, setIsOpen1] = useState(false);

    const toggleOpen1 = () => {
        setIsOpen1(!isOpen1);
    };
    const [isOpen2, setIsOpen2] = useState(false);

    const toggleOpen2 = () => {
        setIsOpen2(!isOpen2);
    };
    const [isOpen3, setIsOpen3] = useState(false);

    const toggleOpen3 = () => {
        setIsOpen3(!isOpen3);
    };

    const [mainImage, setMainImage] = useState(product.img); // State to track main image

    // Extract images from ProductDetails dynamically
    const productImages = product.ProductDetails
        ? Object.values(product.ProductDetails).filter(img => img)
        : [];

    // Function to handle image click and update main image
    const handleImageClick = (image) => {
        setMainImage(image);
    };



    return (
        <>
            <Navbar />
            <div className="mx-xl">
                <div className="mt-4xl grid grid-cols-2 gap-10 md:grid-cols-1 sm:grid-cols-1">
                    <div className="flex flex-col justify-center">
                        <img src={mainImage} alt={product.productName} className="w-full h-full" />
                        <div className='grid grid-cols-4 gap-4 mt-l'>
                            {productImages.map((img, index) => (
                                <img
                                    key={index}
                                    className='w-44 h-32 cursor-pointer'
                                    src={img}
                                    alt={`img${index + 1}`}
                                    onClick={() => handleImageClick(img)}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="bg-grey-bg p-2xl">
                        <h1 className="text-3xl font-bold mb-4">{product.productName}</h1>
                        <p className="text-xl font-semibold mb-2">{product.price}<del className="text-gray-500 ml-2">{product.Discountprice}</del></p>
                        <small className='text-lg'><span className='text-text-yellow underline'>Shipping</span> calculated at checkout.</small>
                        <div className="mt-4">
                            <button className="w-full mb-l bg-dark-bg text-text-yellow px-4 py-3 hover:bg-text-yellow hover:text-text-dark" onClick={() => addToCart(product)}>Add to Cart</button>
                            <Link to='/checkout'>
                                <button className="w-full mb-l bg-dark-bg text-white px-4 py-3 hover:bg-text-yellow hover:text-text-dark">Buy It Now</button>
                            </Link>
                        </div>
                        <div className='faq-item'>
                            <hr className='border-spacing-xl border-dark-bg mt-m mb-m' />
                            <div className="mb-l text-text-dark">
                                <div className="flex items-center py-m justify-between cursor-pointer" onClick={toggleOpen1}>
                                    <h3 className="text-lg"><StarBorderIcon className='me-l' />Warranty</h3>
                                    <svg className={`w-6 h-6 ${isOpen1 ? 'transform rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M13.293 6.293a1 1 0 0 0-1.414 1.414L10 10.414l-1.879-1.88a1 1 0 1 0-1.414 1.414l3.57 3.57a1 1 0 0 0 1.414 0l3.57-3.57a1 1 0 1 0-1.414-1.414L10 10.586l1.293-1.293a1 1 0 0 0 0-1.414z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                {isOpen1 && <p className="p-4">We offer lifetime warranty. If you need to re-season or fix your cast iron cookware, we take pride and ownership in our products and we promise to fix it to you for free for as long as you own it.</p>}
                            </div>
                            <hr className='border-spacing-xl border-dark-bg mb-m' />
                            <div className="mb-l text-text-dark">
                                <div className="flex items-center py-m justify-between cursor-pointer" onClick={toggleOpen2}>
                                    <h3 className="text-lg"><SwapHorizIcon className='me-l' />Return and Exchange</h3>
                                    <svg className={`w-6 h-6 ${isOpen2 ? 'transform rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M13.293 6.293a1 1 0 0 0-1.414 1.414L10 10.414l-1.879-1.88a1 1 0 1 0-1.414 1.414l3.57 3.57a1 1 0 0 0 1.414 0l3.57-3.57a1 1 0 1 0-1.414-1.414L10 10.586l1.293-1.293a1 1 0 0 0 0-1.414z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                {isOpen2 && <p className="p-4">We offer lifetime warranty. If you need to re-season or fix your cast iron cookware, we take pride and ownership in our products and we promise to fix it to you for free for as long as you own it.</p>}
                            </div>
                            <hr className='border-spacing-xl border-dark-bg mb-m' />
                            <div className="mb-l text-text-dark">
                                <div className="flex items-center py-m justify-between cursor-pointer" onClick={toggleOpen3}>
                                    <h3 className="text-lg"><QuestionAnswerIcon className='me-l' />How to season it</h3>
                                    <svg className={`w-6 h-6 ${isOpen3 ? 'transform rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M13.293 6.293a1 1 0 0 0-1.414 1.414L10 10.414l-1.879-1.88a1 1 0 1 0-1.414 1.414l3.57 3.57a1 1 0 0 0 1.414 0l3.57-3.57a1 1 0 1 0-1.414-1.414L10 10.586l1.293-1.293a1 1 0 0 0 0-1.414z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                {isOpen3 && <div className="p-4">
                                    <p className='mb-l'>
                                        What you'll need to begin:
                                    </p>
                                    <ul className='mb-xl p-l list-disc'>
                                        <li>Sunflower or corn oil</li>
                                        <li>Non-shredding paper towels (blue shop towels work well)</li>
                                        <li>Conventional Oven</li>
                                    </ul>
                                    <h2 className='text-3xl mb-xl'>Grif Seasoning Instructions</h2>
                                    <p className='mb-l font-medium'>1. Preheat your oven to 250°C</p>
                                    <p className='mb-l font-medium'>2. Scrub your pan thoroughly to remove any residual food as you would after cooking.  If you are having a particular difficult time cleaning your skillet, use a heavy duty abrasive cleaning pad for the difficult spots</p>
                                    <p className='mb-l font-medium'>3. Thoroughly dry with a clean dish towel or blue shop towel</p>
                                    <p className='mb-l font-medium'>4. Pour approximately half a teaspoon of oil into the pan and wipe a thin coating over the interior surface, lip, and handle with a clothe or shop towel. Flip the skillet over and apply the same process with a more liberal amount of oil on the rough exterior of the pan.</p>
                                    <p className='mb-l font-medium'>5. With a clean paper towel, wipe the interior and exterior of the pan until it has an almost dry matte look. It's important to wipe the pan until the point at which it seems that there is no more oil left on the surface, especially the interior.  If you fail to remove enough oil, the pan will end up with a spidery/patchy look which is difficult to undo without extensive cleaning.</p>
                                    <p className='mb-l font-medium'>6. Place your pan gently upside down in the preheated oven being careful not to scrape the pan as you place it on the rack.</p>
                                    <p className='mb-l font-medium'>7. Cure the skillet for 60 minutes.</p>
                                    <p className='mb-l font-medium'>8. Turn off the oven but leave the skillet inside to finish curing for an additional 30 minutes</p>
                                    <p className='mb-xl font-medium'>9. Remove and repeat 2-3 additional times as necessary.</p>
                                    <div className='mb-l font-medium'>Note: If you end up with a patchy appearance to your skillet as a result of using too much oil, don't worry. Your pan will still cook beautiful and delicious meals.</div>
                                </div>}
                                <hr className='border-spacing-xl border-dark-bg mt-l' />
                            </div>
                        </div>
                        <div>
                            <p className='text-gray-500 mb-l'>share</p>
                            <div>
                                <ul className="text-text-dark font-medium flex">
                                    <li>
                                        <FacebookIcon className='me-xl' />
                                    </li>
                                    <li>
                                        <TwitterIcon className='me-xl' />
                                    </li>
                                    <li>
                                        <PinterestIcon className='me-xl' />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* <p className='text-xl lowercase mt-xl'>Click <span className='text-text-yellow hover:underline'>here</span> to be notified by email when {product.productName} becomes available.</p> */}
                    </div>
                </div>
                <div className='text-text-dark mt-lg mb-xl'>
                    <p className='mt-xl p-lg'>Introducing Grif's latest culinary marvel, crafted in collaboration with the legendary Mourad Makram: {product.productName}, now available in a spacious size!</p>
                    <p className='mt-xl p-lg'>Prepare to infuse your kitchen with warmth, flavor, and boundless joy as you embark on a culinary adventure like no other. With Grif's signature motto "Make Warm Meals and Memories" guiding our journey, this cast iron wok is more than just cookware—it's a vessel of emotion and excitement!</p>
                    <p className='mt-xl p-lg'>Picture yourself sizzling and stirring your favorite ingredients in this vibrant wok, each movement a step closer to creating unforgettable dishes and cherished moments. Whether you're stir-frying a rainbow of vegetables or searing succulent meats, {product.productName} ensures even heat distribution and unparalleled cooking performance.</p>
                    <p className='mt-xl p-lg'>But the magic doesn't stop there! With its durable construction and ergonomic design, this wok promises to be your trusted companion for years to come, inspiring laughter-filled gatherings and heartwarming meals with loved ones.</p>
                    <p className='mt-xl p-lg'>So why settle for ordinary when you can experience the extraordinary? Elevate your culinary repertoire and let the {product.productName} be your ticket to culinary bliss and endless fun in the kitchen. It's time to make warm meals and memories like never before!</p>
                </div>
                <div className='feedback grid grid-cols-3 gap-4 text-text-dark sm:grid-cols-1 md:grid-cols-1 mb-2xl'>
                    <section>
                        <p className='flex'>
                            <svg className='w-8 h-8 me-l' xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 300 224" fill="currentColor"><path d="M235.3 13.2c-18.2 22.8-28.3 41-36.2 64.9-8.5 25.8-10.1 41.5-10.1 98.1V221h109V112h-51.2l.7-4.3c3.4-20.1 14.2-43.2 30.7-65.5l6.9-9.3-2.8-2.2C268.2 19.5 245.4 2 244.9 2c-.3 0-4.6 5.1-9.6 11.2zM55.9 7.7C32.9 38.2 18.5 66.1 11 94.4c-5.5 20.7-6 26.6-6 78.8V221h110V112H88.5c-22 0-26.5-.2-26.5-1.4 0-2.8 5-20.3 7.5-26.5 6.2-15.2 16.8-33 27.5-46.6l4.8-6.1L82 17.7C71.1 10.2 61.6 3.8 60.8 3.5c-.8-.3-2.8 1.4-4.9 4.2z"></path></svg>
                            It's naturally non-stick! I can't believe how great they are! It's my new obsession.
                        </p>
                        <p className='flex justify-end'>- @Ikitchenary (Verified Purchase)</p>
                    </section>
                    <section>
                        <p className='flex'>
                            <svg className='w-8 h-8 me-l' xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 300 224" fill="currentColor"><path d="M235.3 13.2c-18.2 22.8-28.3 41-36.2 64.9-8.5 25.8-10.1 41.5-10.1 98.1V221h109V112h-51.2l.7-4.3c3.4-20.1 14.2-43.2 30.7-65.5l6.9-9.3-2.8-2.2C268.2 19.5 245.4 2 244.9 2c-.3 0-4.6 5.1-9.6 11.2zM55.9 7.7C32.9 38.2 18.5 66.1 11 94.4c-5.5 20.7-6 26.6-6 78.8V221h110V112H88.5c-22 0-26.5-.2-26.5-1.4 0-2.8 5-20.3 7.5-26.5 6.2-15.2 16.8-33 27.5-46.6l4.8-6.1L82 17.7C71.1 10.2 61.6 3.8 60.8 3.5c-.8-.3-2.8 1.4-4.9 4.2z"></path></svg>
                            This is our feedback after the first use, it's simply perfectly as described. Thank you, Grif for the incredible quality.
                        </p>
                        <p className='flex justify-end'>- @Sara3azouz (Verified Purchase)</p>
                    </section>
                    <section>
                        <p className='flex'>
                            <svg className='w-8 h-8 me-l' xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 300 224" fill="currentColor"><path d="M235.3 13.2c-18.2 22.8-28.3 41-36.2 64.9-8.5 25.8-10.1 41.5-10.1 98.1V221h109V112h-51.2l.7-4.3c3.4-20.1 14.2-43.2 30.7-65.5l6.9-9.3-2.8-2.2C268.2 19.5 245.4 2 244.9 2c-.3 0-4.6 5.1-9.6 11.2zM55.9 7.7C32.9 38.2 18.5 66.1 11 94.4c-5.5 20.7-6 26.6-6 78.8V221h110V112H88.5c-22 0-26.5-.2-26.5-1.4 0-2.8 5-20.3 7.5-26.5 6.2-15.2 16.8-33 27.5-46.6l4.8-6.1L82 17.7C71.1 10.2 61.6 3.8 60.8 3.5c-.8-.3-2.8 1.4-4.9 4.2z"></path></svg>
                            I can't believe there are Egyptian made cast iron skillets with this incredible quality.
                        </p>
                        <p className='flex justify-end'>@Sherrybehappy (Verified Purchase)</p>
                    </section>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ProductDetails;


