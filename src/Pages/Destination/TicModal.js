import React from 'react';


const TicModal = ({ modal}) => {
    console.log(modal);
    const {name, Price} = modal;
    return (
        <div>
        <input type="checkbox" id="my_modal" className="modal-toggle" />
        <div className="modal" role="dialog">
            <div className="modal-box">
            <label htmlFor="my_modal" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
                <h3 className="text-lg font-bold">Booking For : {name}</h3>
                <p className="py-4">Price :{Price}</p>
                <div className="modal-action">
                    <label htmlFor="my_modal" className="btn bg-black text-white">CONFIRM</label>
                </div>
            </div>
        </div>
    </div>
    );
};

export default TicModal;