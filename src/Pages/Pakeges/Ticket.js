import React from 'react';
import logo from '../Home/assat/hd-tickets-49032.png';
import './Pakege.css';
import TicModal from '../Destination/TicModal';

const Ticket = ({ tickit, setModal, Modal }) => {
    const { name, Price } = tickit;
    return (
        <div className='w-full'>
            <div className="card bg-primary w-[100%] h-[100%] ticket shadow-xl">
                <figure className="px-10 pt-10">
                    <img
                        src={logo}
                        alt="Shoes"
                        className="rounded-xl w-[50%]" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{Price}</p>
                    <div className="card-actions justify-center">
                        <label htmlFor="my_modal" 
                        className="btn bg-gradient-to-r from-primary to-secondary uppercase text-black font-bold"
                        onClick={()=>setModal(tickit)}
                        >Buy Ticket</label>
                    </div>
                </div>
            </div>
            </div>
            );
};

            export default Ticket;