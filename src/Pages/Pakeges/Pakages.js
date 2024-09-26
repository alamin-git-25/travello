import React, { useEffect, useState } from 'react';
import Ticket from './Ticket';
import bg from '../Home/assat/Vector.png';
import Footer from '../Footer/Footer';
import TicModal from '../Destination/TicModal';


const Pakages = () => {
    const [tickets , setTikets] = useState([]);
    const [Modal, setModal] = useState(null);
    useEffect(()=>{
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data => setTikets(data));
    },[])
    return (
        <section className='mt-[150px] w-[100%] '>
           <div className='w-[80%] mx-auto no-scrollbar   my-[50px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 '>
           {
                tickets.map(tickit =><Ticket
                key={tickit._id}
                tickit={tickit} 
                setModal={setModal}
                Modal={Modal}
                ></Ticket>)   
            }
           
            {
                Modal && <TicModal modal={Modal}></TicModal>
            }
            
           </div>
           <div>
</div>
           <Footer/>
        </section>
    );
};

export default Pakages;