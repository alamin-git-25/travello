import React from 'react';
import bg from '../Home/assat/Vector.png';
import img from '../Home/assat/img.png';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase/Firebase.init';

const Banner = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
   const destini = ()=>{
    if(user){
        navigate('/destination')
    }
    else{
        navigate('/login');
    }
   }
    return (
        <section className='w-[80%] mx-auto h-screen' style={{ backgroundImage: 'url('+bg+')'}}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 place-items-center">
                <div className='mt-[150px]'>
                    <p className='text-3xl text-accent p-0 m-0'>the best deals on the world's best destinations</p>
                    <h3 className='text-8xl text-white my-6'>Best travel and destinations</h3>
                   <p className='text-3xl leading-relaxed p-0 mb-10'> With travala you can experience new travel and the best tourist destinations that we have to offer</p>
                  <div className='flex'>
                  <button className='px-10 py-4  bg-gradient-to-r from-neutral to-primary text-black font-bold rounded-full mr-10' onClick={destini}>Our Destination</button>
                   <span className='flex items-center'>
                   <i class='bx bx-play-circle text-3xl text-neutral mr-2 cursor-pointer' ></i>
                   <p className='cursor-pointer'>Our Gallery</p>
                   </span>
                  </div>
                </div>
                <div className='mt-[200px] relative'>
                    <img src={img} alt="" className='ml-[70px]'/>
                </div>
            </div>
        </section>
    );
};

export default Banner;