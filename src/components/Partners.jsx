import React from 'react';
import MovingText from './MovingText';
import company1 from "../assets/partner_1.svg";
import company3 from "../assets/partner_3 (1).svg";
import company2 from "../assets/partner_3.svg";
const Partners = () => {
    return (
        <div>
           <MovingText/>

           {/*company logos */} 
           <div className='grid lg:grid-cols-3 grid-cols-2 items-center gap-8 lg:px-4 pt-5 '>
               <img src={company1} alt="" />
               <img src={company2} alt="" />
               <img src={company3} alt="" />
               <img src={company1} alt="" />
               <img src={company2} alt="" />
               <img src={company3} alt="" />
           </div>

           <div className='h-20'> </div>
        </div>
    );
};

export default Partners;