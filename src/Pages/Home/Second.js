import React from 'react';
import img from '../Home/assat/Group 48095464.png';
import logo1 from '../Home/assat/Group 444.png'
import logo2 from '../Home/assat/Group 4444.png'
import logo3 from '../Home/assat/Group 4257.png'

const Second = () => {
    return (
        <section className='w-[100%] h-screen  bg-base-200'>
            <div className="grid grid-cols-1 lg:grid-cols-2 w-[80%]   mx-auto gap-10 place-items-center">
                <div className='mt-40'>
                    <h1 className='text-5xl text-base-100 my-6'>Get Experience<br/>
                    Which are fun</h1>
                    <p className='text-xl leading-relaxed p-0 mb-10 text-base-100'>With travala you can get the best experience on holiday travel, and we always update the latest and best destinations in the world</p>
                    <img src={img} alt="" />
                </div>

                <div  className='mt-40 ml-20'>
                    <div className='flex items-center gap-10 justify-end m-8'>
                        <img src={logo3} alt="" />
                        <div>
                            <h3 className='text-4xl leading-relaxed text-base-100'>Affordable prices</h3>
                            <p className='text-xl  p-0 mb-10 text-base-100'>We provide some very affordable prices compared to others.</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-10 justify-end m-8'>
                        <img src={logo2} alt="" />
                        <div>
                            <h3 className='text-4xl leading-relaxed text-base-100'>Unforgettable experience</h3>
                            <p className='text-xl  p-0 mb-10 text-base-100'>We provide a vacation experience that will be unforgettable.</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-10 justify-end m-8'>
                        <img src={logo1} alt="" />
                        <div>
                            <h3 className='text-4xl leading-relaxed text-base-100'>Very Friendly Service</h3>
                            <p className='text-xl  p-0 mb-10 text-base-100'>We will provide excellent and friendly service for the sake of our customers.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Second;
