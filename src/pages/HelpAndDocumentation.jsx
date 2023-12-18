import React, { useState } from 'react';
import './HelpAndDocumentation.css'; // Import the CSS file for styling

const HelpAndDocumentation = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="help-page">
            <h1 className="page-title">Help & Documentation</h1>
            
            <section className="faq-section">
                <h2>FAQs</h2>
                <div className="accordion">
                    {faqs.map((faq, index) => (
                        <div className="accordion-item" key={index}>
                            <div className="accordion-title" onClick={() => handleClick(index)}>
                                <span>{faq.question}</span>
                                <span>{activeIndex === index ? '-' : '+'}</span>
                            </div>
                            {activeIndex === index && <div className="accordion-content">{faq.answer}</div>}
                        </div>
                    ))}
                </div>
            </section>

            <section className="user-guide-section">
                <h2 className='font-extrabold'>User Guides</h2>
                
                <div className="guide-item">
                    <h3 className='font-bold'>Creating a New Advertisement</h3>
                    <ol>
                        <li>Navigate to the 'New Ad' tab on the top menu.</li>
                        <li>Fill out the form with the necessary details, including name, tagline, and price.</li>
                        <li>Upload up to 4 images by clicking on 'Attach files' or dragging and dropping the images into the designated area.</li>
                        <li>Review your information and click the 'Publish' button to submit your advertisement.</li>
                    </ol>
                </div>

                <div className="guide-item">
                    <h3 className='font-bold'>Navigating the Website</h3>
                    <ol>
                        <li>Use the top navigation bar to access different sections like Home, Categories, and New Ad.</li>
                        <li>Scroll down on the homepage to view the latest products and offerings.</li>
                        <li>Click on any product to get more detailed information.</li>
                    </ol>
                </div>

                <div className="guide-item">
                    <h3 className='font-bold'>Using Advanced Features</h3>
                    <ol>
                        <li>To customize your search, use the search bar at the top of the page.</li>
                        <li>Use filters on the category page to narrow down your search results based on price, ratings, etc.</li>
                        <li>For quick access to your cart, click on the cart icon in the top right corner of the page.</li>
                    </ol>
                </div>

            </section>


            <section className="contact-support-section">
                <h2 className='font-extrabold'>Need More Help?</h2>
                <p>If you have specific questions or need further assistance, our support team is here to help you.</p>
                
                <div className="contact-methods">
                    <div>
                        <h3 className='font-bold'>Email Support</h3>
                        <p>Send us an email at <a href="mailto:mohdnawaz6393@gmail.com">mohdnawaz6393@gmail.com</a>, and we'll get back to you as soon as possible.</p>
                    </div>
                    
                    <div>
                        <h3 className='font-bold'>Live Chat</h3>
                        <p>Use the live chat feature on our website for immediate assistance during business hours.</p>
                    </div>

                    <div>
                        <h3 className='font-bold'>Phone Support</h3>
                        <p>Call us at (0345)-6684481. Available from 9 am to 5 pm on weekdays.</p>
                    </div>

                    
                </div>
            </section>
        </div>
    );
};

const faqs = [
    {
        question: "How do I create a new advertisement?",
        answer: "Go to the 'New Ad' tab and fill out the form. You'll need to provide details such as name, tagline, price, etc., and upload up to 4 images."
    },
    {
        question: "What formats are accepted for images?",
        answer: "We accept PNG and JPG formats, with a maximum size of 10MB per image."
    },
    // Add more FAQs as needed
];

export default HelpAndDocumentation;
