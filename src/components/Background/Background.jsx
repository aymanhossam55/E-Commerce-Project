import React, { useState, useEffect } from 'react'
import HomeBg from '../../assets/HomeBg.webp'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Background = () => {

    const [textIndex, setTextIndex] = useState(0);
    const textOptions = ["meals", "memories"];

    useEffect(() => {
        const interval = setInterval(() => {
            setTextIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
        }, 2000); // Change text every 2 seconds

        return () => clearInterval(interval); // Cleanup the interval on component unmount
    }, []);

    return (
        <>
            <div className='background-img w-full'>
                <img className='h-auto w-full' src={HomeBg} alt="background-img" />
            </div>
            <div className='relative bottom-64 ms-xl sm:bottom-36 md:bottom-48'>
                <header className='mb-l'>
                    <h1 className='text-6xl font-semibold text-text-yellow mb-m sm:text-2xl md:text-4xl'>Make warm</h1>
                    <h1 className='text-6xl font-semibold text-text-yellow sm:text-2xl md:text-4xl'>
                        {textOptions[textIndex].split("").map((letter, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: {
                                        duration: 0.5,
                                        delay: index * 0.1 // Delay each letter animation
                                    }
                                }}
                            >
                                {letter}
                            </motion.span>
                        ))}
                    </h1>
                </header>
                <Link to='/shop'>
                    <button className='px-3xl py-l bg-dark-btn text-white rounded-l hover:bg-hover-white hover:text-text-dark sm:px-2xl sm:py-m'>Shop</button>
                </Link>
            </div>
        </>
    )
}

export default Background