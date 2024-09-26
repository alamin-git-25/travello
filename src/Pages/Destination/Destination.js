import React, { useRef, useState } from 'react';
import bg from '../Home/assat/Vector.png';
import logo from '../Home/assat/des.png';
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import TicModal from './TicModal';
import Pakages from '../Pakeges/Pakages';


const Destination = () => {
    const [date , setDate] = useState(new Date());
    const fadd = useRef('');
    const toAdd = useRef('');
    const form = (e)=>{
        e.preventDefault();
        const fAddress = fadd.current.value;
        const toAddress = toAdd.current.value;
        console.log(fAddress,toAddress);
    }
    return (
        <section className='w-[80%] mx-auto h-screen' style={{ backgroundImage: 'url('+bg+')'}}>
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 place-items-center">
                <div className='mt-[110px] custom p-5' > 
                    <h3 className='text-4xl text-white my-6'>Plan a Tour Today</h3> 
                    <h2 className='text-3xl  my-6 text-accent'>Just How You Want</h2>
                <form action="" onSubmit={form} className='flex flex-col w-[550px] h-450px gap-4 justify-center items-center'>
                   
                    <input ref={fadd} className=' text-orange-700 px-[10px] py-[15px] w-full text-2xl tracking-widest rounded' type="text" placeholder='FROM WHERE'/>
                   
                    <input ref={toAdd} className=' text-orange-700 px-[10px] py-[15px] w-full text-2xl tracking-widest rounded' type="text" placeholder='TO WHERE'/>
                   <input className=' text-orange-700 px-[10px] py-[15px] w-full text-2xl tracking-widest rounded' type="text" value={ date ? `DATE: ${date.toLocaleDateString()}` : "Pick a day."} />
                    <DayPicker
                         mode="single"
                         selected={date}
                         onSelect={setDate}
                        
                        
                    />
                    <input className='px-[10px] py-[18px] text-2xl tracking-widest rounded w-full bg-orange-600' type="submit" value="Search Pakages" />
                </form>

                </div>
                <div className='mt-[200px] relative'>
                    <img src={logo} alt="" className='ml-[70px]'/>
            </div>
            </div>
        </section>
    );
};

export default Destination;