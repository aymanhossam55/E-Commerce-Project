import React from 'react'
import Products from '../../components/Products/Products';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const Shop = () => {
  return (
    <div>
          <Navbar/>
          <Products showAdditionalSection={true} />
          <Footer/>
    </div>
  )
}

export default Shop