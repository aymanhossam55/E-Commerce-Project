import {
    Routes,
    Route,
    BrowserRouter as Router,
    createRoutesFromElements,
    RouterProvider,
    createBrowserRouter,
} from 'react-router-dom';

import Home from '../pages/Home/Home'
import Shop from '../pages/Shop/Shop'
import HowToUse from '../pages/HowToUse/HowToUse'
import Cart from '../pages/Cart/Cart'
import ProductDetails from '../pages/ProductDetails/ProductDetails'
// import BuyProduct from '../pages/BuyProduct/BuyProduct'
import MoreProducts from '../pages/MoreProducts/MoreProducts'
import FAQs from '../pages/FAQs/FAQs'
import OurStory from '../pages/OurStory/OurStory'
import CheckOut from '../pages/CheckOut/CheckOut'


const router = createBrowserRouter(
    createRoutesFromElements(
        <>

            <Route>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/ourstory" element={<OurStory />} />
                <Route path="/howtouse" element={<HowToUse />} />
                <Route path="/faqs" element={<FAQs />} />
                <Route path="/productdetails/:productName" element={<ProductDetails />} />
                <Route path="/collections/:category" element={<MoreProducts />} />
                <Route path="/cart" element={<Cart />} />
                {/* <Route path="/buyproduct" element={<BuyProduct />} /> */}
                <Route path="/checkout" element={<CheckOut />} />
            </Route>
            <Route
                path="*"
                element={
                    <main style={{ padding: '1rem' }}>
                        <h1 className="text-5xl text-center">There's nothing here!</h1>
                    </main>
                }
            />
        </>
    )
);

const Routers = () => {
    return <RouterProvider router={router} />;
};

export default Routers;

// {/* <Route path="*" element={<ErrorPage />} /> */}
