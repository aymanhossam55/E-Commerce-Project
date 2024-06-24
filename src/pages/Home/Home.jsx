// Home.js
import React from 'react';
import Products from '../../components/Products/Products';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import StarIcon from '@mui/icons-material/Star';
import Homeimg from '../../assets/Homeimg.webp'
import CBC from '../../assets/CBC.webp'
import Elwatan from '../../assets/Elwatan.webp'
import Eldoustour from '../../assets/Eldoustour.webp'
import Youm7 from '../../assets/Youm7.webp'
import SharkTank from '../../assets/SharkTank.webp'
import Instapay from '../../assets/Instapay.webp'
import CashonDelivery from '../../assets/CashonDelivery.webp'
import Visa from '../../assets/Visa.webp'
import VodafoneCash from '../../assets/VodafoneCash.webp'
import Mastercard from '../../assets/Mastercard.webp'
import Background from '../../components/Background/Background';

const Home = () => {

  return (
    <div>
      <Background />
      <Navbar />
      <Products showAdditionalSection={false} />
      <div className='testimonials'>
        <h2 className='flex justify-center text-text-dark text-3xl mb-xl mt-xl'>Testimonials</h2>
        <div className='grid grid-cols-4 gap-4 items-center mx-xl mb-2xl md:grid-cols-2 sm:grid-cols-1'>
          <section className='section-one text-center mb-l'>
            <div className='stars flex justify-center mb-l'>
              <StarIcon className='ms-m' />
              <StarIcon className='ms-m' />
              <StarIcon className='ms-m' />
              <StarIcon className='ms-m' />
              <StarIcon className='ms-m' />
            </div>
            <h4 className='mx-l'>Best cast iron cookware, and highest quality in the Middle East</h4>
            <p className='mx-l'>Heidi ElAbd, Angel Investor</p>
          </section>
          <section className='section-two text-center mb-l'>
            <div className='stars flex justify-center mb-l'>
              <StarIcon className='ms-m' />
              <StarIcon className='ms-m' />
              <StarIcon className='ms-m' />
              <StarIcon className='ms-m' />
              <StarIcon className='ms-m' />
            </div>
            <h4 className='mx-l'>I'm very proud that these products are made in Egypt</h4>
            <p className='mx-l'>Abdallah Sallam. CEO of Madinet Masr Housing and Development</p>
          </section>
          <section className='section-three text-center mb-l'>
            <div className='stars flex justify-center mb-l'>
              <StarIcon className='ms-m' />
              <StarIcon className='ms-m' />
              <StarIcon className='ms-m' />
              <StarIcon className='ms-m' />
              <StarIcon className='ms-m' />
            </div>
            <h4 className='mx-l'>These products are high quality cast iron products.</h4>
            <p className='mx-l'>Ahmad Al Sweedy, President and CEO of Elsewedy Electric</p>
          </section>
          <section className='section-four text-center mb-l'>
            <div className='stars flex justify-center mb-l'>
              <StarIcon className='ms-m' />
              <StarIcon className='ms-m' />
              <StarIcon className='ms-m' />
              <StarIcon className='ms-m' />
              <StarIcon className='ms-m' />
            </div>
            <h4 className='mx-l'>I love the products and the message "Proudly Made in Egypt</h4>
            <p className='mx-l'>Ayman Abbas, Founder of The Egyptian Chinese Drilling Co</p>
          </section>
        </div>
      </div>
      <div className='HomeStory'>
        <div className='mb-xl'>
          <div className='bg-grey-bg flex text-text-dark md:flex-wrap-reverse sm:flex-wrap-reverse md:text-center sm:text-center'>
            <section className='px-xl mt-32 text-l font-normal text-text-dark'>
              <h1 className='mb-2xl text-2xl'>A word from the founder</h1>
              <p className='mb-2xl'>I am humbled and proud to be a part of a company that is changing the game in the Middle East's cookware industry. Grif is a pioneer in producing high-quality cast iron cookware, and it's an honor to be leading this charge.</p>

              <p className='mb-2xl'>As a young entrepreneur, I was inspired to create Grif when I saw a need for cookware that was functional, healthy and elegant. We wanted to produce cookware that not only enhanced the cooking experience but also looked beautiful on the dining table. And we succeeded.</p>

              <p className='mb-2xl'>Our journey to success was not easy, but we persevered through every challenge with our unwavering commitment to quality and excellence. The fact that we were one of the first companies to produce cast iron cookware in the Middle East is a testament to our determination and passion.</p>

              <p className='mb-2xl'>Our appearance on Shark Tank was a pivotal moment for Grif, and it gave us the boost we needed to take our brand to new heights.</p>

              <p className='mb-2xl'>Today, Grif is becoming a symbol of quality and innovation in the Middle East's cookware industry. Our customers trust us to provide them with the best possible products, and we take that trust very seriously. We are constantly pushing ourselves to improve and innovate, and we are excited to see where this journey takes us.</p>

              <p className='mb-2xl'>Thank you for being a part of the Grif community, and for supporting us on our journey. We are proud to be serving you with the best possible service and products, and we look forward to continuing to exceed your expectations.</p>

              <p className='mb-2xl'>Sincerely,</p>

              <h2 className='font-semibold text-lg'>Youssef Al Ryan</h2>
              <p className='mb-2xl'>Founder, Grif Cookware</p>

            </section>
            <img src={Homeimg} className='w-6/12 sm:w-full md:w-full' alt="OurStoryGrifcookware" />
          </div>
        </div>
      </div>
      <div className='social-Media'>
        <h2 className='flex justify-center text-text-dark text-3xl mb-xl mt-xl'>As Seen on</h2>
        <div className='flex justify-center flex-wrap gap-4 items-center mx-xl mb-2xl'>
          <img className='w-32 me-xl' src={CBC} alt="CBC" />
          <img className='w-32 me-xl' src={Eldoustour} alt="Eldoustour" />
          <img className='w-32 me-xl' src={Elwatan} alt="Elwatan" />
          <img className='w-32 me-xl' src={Youm7} alt="Youm7" />
          <img className='w-32 me-xl' src={SharkTank} alt="SharkTank" />
        </div>
      </div>
      <div className='short-video'>
        <iframe
          className='w-full'
          height={487}
          src="https://www.youtube.com/embed/8X0dC15kP0w?autoplay=1&loop=1&playlist=8X0dC15kP0w"
          title="Grif Cast Iron - Teaser Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          aria-controls={false} // Set controls to 0 to hide them
        ></iframe>

      </div>
      <div className='payment-method'>
        <h2 className='flex justify-center text-text-dark text-3xl mb-xl mt-xl'>We Accept</h2>
        <div className='flex justify-center flex-wrap gap-4 items-center mx-xl mb-2xl'>
          <img className='w-32 me-xl' src={Visa} alt="Visa" />
          <img className='w-32 me-xl' src={Mastercard} alt="Mastercard" />
          <img className='w-32 me-xl' src={VodafoneCash} alt="VodafoneCash" />
          <img className='w-32 me-xl' src={Instapay} alt="Instapay" />
          <img className='w-32 me-xl' src={CashonDelivery} alt="CashonDelivery" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;