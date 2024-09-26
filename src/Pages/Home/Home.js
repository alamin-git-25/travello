import React from 'react';
import Banner from './Banner';
import Second from './Second';
import Thiard from './Thiard';
import Footer from '../Footer/Footer';


const Home = () => {
    return (
        <main className='w-full mx-auto h-screen'>
            <Banner/>
            <Second/>
            <Thiard/>
            <Footer/>
        </main>
    );
};

export default Home;