import React from 'react'
import OurStoryImg from '../../assets/OurStoryImg.webp'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

const OurStory = () => {
    return (
        <div>
            <Navbar />
            <div className='mb-xl'>
                <h2 className='flex justify-center mt-8xl mb-5xl text-2xl'>Our Story</h2>
                <div className='bg-grey-bg flex mx-xl md:flex-wrap sm:flex-wrap sm:text-center md:text-center'>
                    <img src={OurStoryImg} className='w-6/12 md:w-full sm:w-full' alt="OurStoryGrifcookware" />
                    <section className='px-xl mt-32 text-l font-normal text-text-dark'>
                        <p className='mb-2xl'>Grif Cookware was founded by the visionary entrepreneur Youssef Al Ryan, who appeared on the hit show Shark Tank and wowed the Sharks with his passion and expertise in the cast iron cookware industry. Since then, Grif has grown to become a pillar and a pioneer in the cast iron cookware industry in Egypt and the Middle East.</p>

                        <p className='mb-2xl'>What sets Grif apart from other cookware brands is its commitment to quality and craftsmanship. Every piece of Grif cookware is designed to meet the highest standards of durability and functionality, while also being beautiful and elegant.</p>

                        <p className='mb-2xl'>Since its founding, Grif has acquired thousands of customers in just a few months, thanks to its reputation for quality, reliability, and innovation. Whether you're a professional chef or a home cook, Grif cookware is the perfect choice for anyone who loves to cook with passion and style.</p>

                        <p className='mb-2xl'>At Grif, we believe in the power of cooking to bring people together, to inspire creativity, and to nourish the soul. That's why we are committed to providing our customers with the best possible cookware, and to inspiring them to create amazing dishes that will delight their friends and families.</p>
                    </section>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default OurStory