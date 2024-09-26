import React, { useState } from 'react';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../../firebase/Firebase.init';
import './Header.css';

const Header = () => {
    const [open, setOpen] = useState(false);
    const [user] = useAuthState(auth);
    const [signOut] = useSignOut(auth);
    const singout = ()=>{
        signOut();
    }
    return (
        <header className=''>
            <nav className='flex justify-between w-full h-[10vh] bg-black items-center fixed z-10 mx-auto'>
                <div className="logo lg:ml-40 ml-20">
                    <h1 className='text-white text-4xl font-bold pl-5'>Travello</h1>
                </div>
                <div className='lg:hidden mr-20' onClick={()=>setOpen(!open)}>
                    {open ? <i class='bx bx-x text-6xl' ></i> :<i class='bx bx-menu text-6xl'></i> }
                </div>
                <ul className={`lg:flex lg:gap-12 gap-8 lg:mr-40 mr-20 block lg:static absolute lg:bg-transparent bg-green-500 duration-500 ease-linear z-[-10] rounded right-0 ${open ? 'md:top-[10vh] sm:top-[10vh]' : 'md:top-[-100vh] sm:top-[-100vh]'}`}>
                    <li className='lg:p-0 px-20 py-5 pt-10'><NavLink to='home' className='text-2xl text-white'>Home</NavLink></li>
                    <li className='lg:p-0 px-20 py-5'><NavLink to='destination' className='text-2xl text-white'>Destination</NavLink></li>
                    {
                        user  &&  <li className='lg:p-0 px-20 py-5 pt-10'><NavLink to='visa' className='text-2xl text-white'>Visa</NavLink></li>
                        
                    }
                    <li className='lg:p-0 px-20 py-5'><NavLink to='pakeges' className='text-2xl text-white'>Pakages</NavLink></li>
                    <li className='lg:p-0 px-20 py-5'><NavLink to='contact' className='text-2xl text-white'>Contact</NavLink></li>
                   {
                    !user &&  <li className='lg:p-0 px-20 py-5'><NavLink to='register' className='text-2xl text-white'>Register</NavLink></li>
                   }
                    {
                        user ? <li className='lg:p-0 px-20 py-5 pb-10'><NavLink to='login' className='text-2xl text-white lg:text-white   ' onClick={singout}>Logout</NavLink></li> : <li className='lg:p-0 px-20 py-5 pb-10'><NavLink to='login' className='text-2xl text-white lg:text-white  '>Login</NavLink></li>
                    }
                   <div className='flex gap-3 items-center'>
                   {
                        user && <div className="avatar">
                        <div className="ring-primary ring-offset-base-100 w-8 rounded-full ring ring-offset-2">
                       {
                        user.photoURL ?  <img src={user.photoURL} alt="" /> : <i class='bx bxs-user text-3xl text-neutral'></i>
                       }
                        </div>
                       </div>
                    }
                    {
                        user?.displayName && <p className='text-xl text-accent'>{user.displayName}</p>
                    }
                   </div>
                </ul>
                 
                
            </nav>
        </header>
    );
};

export default Header;