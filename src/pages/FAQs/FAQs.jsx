import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="mb-l mx-l text-text-dark">
                <div className="flex items-center justify-between bg-gray-200 p-l cursor-pointer" onClick={toggleOpen}>
                    <h3 className="text-lg">{question}</h3>
                    <svg className={`w-6 h-6 ${isOpen ? 'transform rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M13.293 6.293a1 1 0 0 0-1.414 1.414L10 10.414l-1.879-1.88a1 1 0 1 0-1.414 1.414l3.57 3.57a1 1 0 0 0 1.414 0l3.57-3.57a1 1 0 1 0-1.414-1.414L10 10.586l1.293-1.293a1 1 0 0 0 0-1.414z" clipRule="evenodd" />
                    </svg>
                </div>
                {isOpen && <p className="p-4 bg-gray-100">{answer}</p>}
            </div>
        </>
    );
};

export const FAQs = () => {
    return (
        <>
            <Navbar />
            <div className="max-w-lg mx-auto mt-6xl mb-2xl md:mt-6xl sm:mt-8xl">
                <h2 className="text-2xl font-bold mt-xl mb-2xl flex justify-center sm:text-xl">Frequently Asked Questions</h2>
                <FAQItem
                    question="Are all Grif products made in Egypt?"
                    answer="Yes! We are proud to say that all Grif Cookware products are made here in Egypt. We strive to keep our supply chain as local as possible. All of our cast iron products are made in Egypt."
                />
                <FAQItem
                    question="Are all Grif skillets seasoned?"
                    answer="All of our cast iron products have received two seasoning coats of sunflower oil. This means that the pan is ready to use as soon as you open the box. Give it a quick wash and then you're ready to begin cooking."
                />
                <FAQItem
                    question="What is the best method for seasoning?"
                    answer="What you'll need to begin: Sunflower or corn oil, Non-shredding paper towels (blue shop towels work well), Conventional Oven. [Instructions follow...]"
                />
                <FAQItem
                    question="Why isn't my cast iron a uniform black color?"
                    answer="As you use your skillet and you notice it becoming blotchy, or it is not as dark as you were expecting, do not be concerned. It takes time to build up the dark patina associated with traditional cast iron. As you use your pan regularly, you will begin to see it transform."
                />
                <FAQItem
                    question="What is Grif Cookware's warranty?"
                    answer="Our cast iron products are designed and made to be used by you and generations to follow which is why we stand by you and our cast iron cookware with a lifetime warranty. We want to help you resolve any issues that arise while using your pan. Most of the time, the solution will be to continue frequent use. If you have any questions please email us at grif@grifcookware.com."
                />
                <FAQItem
                    question="Does Grif Cookware have a return policy?"
                    answer="If you would like to return your cookware for any reason, given the product is unused and in mint condition we offer a 14 days return policy for a refund minus return shipping costs. For used products within 14 days since purchase, we offer a product exchange with no refund. After 14 days of the purchase, we don't offer either refund or exchange."
                />
            </div>
            <Footer />
        </>
    );
};

export default FAQs;
