import React, { useRef } from 'react';
import bg from '../Home/assat/Vector.png';
import logo from '../Home/assat/login.png';
import './Register.css';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase/Firebase.init';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
    const navigate = useNavigate();
    const emailref = useRef('');
    const passwordref = useRef('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const login = (e) => {
        e.preventDefault();
        const email = emailref.current.value;
        const passwd = passwordref.current.value;

        signInWithEmailAndPassword(email, passwd);
    }

    const [signInWithGoogle, gouser] = useSignInWithGoogle(auth);
    const google = () => {
        signInWithGoogle();

    }
    if (user) {
       toast.success('Login Sucsessful');
        
    }
    if(user){
        setInterval(5000);
        navigate('/home');
    }
    if(gouser){
        toast.success(`${user?.displayName}`);
        navigate('/home');
    }
    

    return (
        <section className='w-[80%] mx-auto h-screen' style={{ backgroundImage: 'url(' + bg + ')' }}>
            <div className='flex justify-around items-center w-full h-screen'>
                <div className='w-[550px] h-[600px] custom  mt-[100px] p-8'>
                    <h3 className='text-4xl p-6 text-center text-base-200'>Login</h3>
                    <p className='text-accent text-2xl  pb-2'>Welcome Back !</p>
                    <form action="#" onSubmit={login} className='flex flex-col  gap-5   ' >

                        <input ref={emailref} className=' text-black text-xl py-[18px] px-5 rounded' type="email" name="" id="" placeholder='Email' />
                        <input ref={passwordref} className=' text-black text-xl py-[18px] px-5 rounded mb-8' type="password" name="" id="" placeholder='Password' />
                        <input className=' py-[20px] px-5 w-full  bg-orange-600  text-white font-bold rounded' type="submit" value="Login" />
                        <p className='text-center pb-4'>OR</p>
                    </form>
                    <button className='py-[20px] px-5 w-full  bg-orange-600 text-white font-bold rounded' type="submit" value="Login" onClick={google}>Google</button>
                </div>
                <div className='w-[50%] h-[50%]'>
                    <img src={logo} alt="" className='w-full h-full' />
                </div>
            </div>
                    
        </section>
    );
};

export default Login;