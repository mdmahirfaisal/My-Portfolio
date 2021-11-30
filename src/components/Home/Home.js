import * as React from 'react';
import './Home.css';
import Banner from '../Banner/Banner'
import About from '../About/About';
import Projects from '../Projects/Projects';
import Footer from '../Footer/Footer';
import Contact from '../Contact/Contact';


const Home = () => {


    return (
        <div id="home">
            <Banner></Banner>
            <About></About>
            <Projects></Projects>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;