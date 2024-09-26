import React from 'react';
import bg from '../Home/assat/Vector.png';
import img from '../Home/assat/Group 48095472.png';
import logo from '../Home/assat/Frame 48095423.png';

const Thiard = () => {
    return (
        <section className='w-[80%] mx-auto h-screen' style={{ backgroundImage: 'url('+bg+')'}}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 ">
                <div className='mt-[200px]'>
            
                    <h3 className='text-8xl text-white my-6'>We are ready to provide the best trip for you</h3>
                   <p className='text-3xl leading-relaxed p-0 mb-10'>We have a variety of the world's best destinations that you can choose as your trip destination</p>
                  <div className='flex'>
                  <button className='px-10 py-2  bg-gradient-to-r from-neutral to-primary text-black font-bold rounded-full mr-10'><span className='flex items-center justify-center'><p>Contact Now</p><img src={logo} alt="" className='w-12 h-12 mt-2.5 ml-3'/></span></button>
                  </div>
                </div>
                <div className='mt-[200px] relative w-[800px] h-[750px]'>
                    <img src={img} alt="" className='ml-[70px] w-full h-full'/>
                </div>
            </div>
        </section>
    );
};

export default Thiard;