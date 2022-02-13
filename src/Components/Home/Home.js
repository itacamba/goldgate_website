import React from 'react';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Gallery from '../Gallery/Gallery';
import Header from '../Header/Header'
import Main from '../Main/Main';
import Services from '../Services/Services';
import TheProcess from '../TheProcess/TheProcess';
import WhyUs from '../WhyUs/WhyUs';

const Home = () => {
    return (
    <div>
      <Header />
      <Main/>
      <Services />
      <Gallery />
      <WhyUs />
      <TheProcess />
      <Contact />
      <Footer />
    </div>
    );
};

export default Home;