import React, { useRef, useState } from 'react';
import bg from '../Home/assat/Vector.png';
import logo from '../Home/assat/login.png';
import './Register.css';
import auth from '../../firebase/Firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Register = () => {
    const navigate = useNavigate();
    const nameref = useRef('');
    const emailref = useRef('');
    const passwordref = useRef('');
    const confirmref = useRef('');
  
        const [
            createUserWithEmailAndPassword,
            user,
            loading,
            error,
          ] =  useCreateUserWithEmailAndPassword(auth);
    const singup =(e)=>{
        e.preventDefault()
        const name = nameref.current.value;
        const email = emailref.current.value;
        const passwd = passwordref.current.value;
        const conpass = confirmref.current.value;

       if(passwd === conpass){
        createUserWithEmailAndPassword(email,passwd);
        console.log(email, passwd);
       }
       else{
         return
       }

    }
    if (user) {
        toast.success('Registration Sucsessful');
         
     }
    if(user){
        setInterval(5000);
        navigate('/home');
    }
    const [signInWithGoogle] = useSignInWithGoogle(auth)
    const google = ()=>{
        signInWithGoogle();
    }
    
    return (
        <section className='w-[80%] mx-auto h-screen' style={{ backgroundImage: 'url(' + bg + ')' }}>
            <div className='flex justify-around items-center w-full h-screen'>
               <div className='w-[550px] h-[800px] custom  mt-[100px] p-8'>
               <h3 className='text-4xl p-6 text-center text-base-200'>Register</h3>
               <p className='text-accent text-2xl mx-8 pb-5'>Please Register !</p>
               <form action="#" onSubmit={singup}  className='flex flex-col  gap-5   ' >
              
                    <input ref={nameref} className=' text-black text-xl py-[18px] px-5 rounded' type="text" placeholder='Name' />
                    <input ref={emailref} className=' text-black text-xl py-[18px] px-5 rounded' type="email" name="" id="" placeholder='Email' />
                    <input ref={passwordref} className=' text-black text-xl py-[18px] px-5 rounded' type="password" name="" id="" placeholder='Password' />
                    <input ref={confirmref} className=' text-black text-xl py-[18px] px-5 rounded mb-8' type="password" name="" id="" placeholder='Confirm Password' />
                   
                    <input className=' py-[20px] px-5 w-full bg-primary  text-base-100 font-bold rounded' type="submit" value="Register" />
                   <p className='text-center'>OR</p>
                </form>
                <button className='py-[20px] px-5 w-full  bg-primary  text-base-100 font-bold rounded' type="submit" value="Register" onClick={google}>Google</button>
               </div>
               <div className='w-[50%] h-[50%]'>
                <img src={logo} alt="" className='w-full h-full'/>
               </div>
            </div>
        </section>
    );
};

export default Register;