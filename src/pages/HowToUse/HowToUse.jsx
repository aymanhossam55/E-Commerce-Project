import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const HowToUse = () => {
  return (
    <>
      <Navbar />
      <div className='text-text-dark mx-xl'>
        <h2 className='text-2xl font-semibold mt-xl mb-5xl flex justify-center'>How to Use</h2>
        <p className='text-2xl font-normal mt-xl mb-2xl flex justify-center'>In this video you'll find out how to use, wash and maintain your Grif Cookware.</p>
        <div className='flex justify-center mb-2xl'>
          <iframe className='sm:w-full sm:max-w-5xl sm:h-auto' width="1139" height="642" src="https://www.youtube.com/embed/1NLaLMYUJbg" title="How to use your cast iron cookware ازاي نستخدم و نعتني بالطاسات و الاواني الزهر - Grif Cast Iron" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default HowToUse