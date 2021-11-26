import React from 'react';
import Review from '../Review/Review'
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Services from '../Services/Services';
import Gallery from '../Gallery/Gallery';

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <Products />
            <Gallery />
            <Review/>
            <hr className="container"/>
            <Services />
            <Footer />
        </div>
    );
};

export default Home;