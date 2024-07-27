import React from 'react';
import { AiTwotoneMessage } from 'react-icons/ai';
import { FaArrowRight, FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FiPhoneOutgoing } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Header = () => {
    const navItems = [
        {title:"Home", link:"/"},
        {title:"About", link:"/about"},
        {title:"Courses", link:"/courses"},
        {title:"Upcoming Batch", link:"/upcoming"},
        {title:"Join Seminars", link:"/seminars"},
        {title:"Success Stories", link:"/SuccessStories"},
        {title:"Services", link:"/Services"},
        {title:"Contact", link:"/Contact"}
        
    ]
    return (
        <div >
             <div className='bg-black flex justify-between items-center text-white py-2 px-8'>
                 <div className='flex space-x-3  items-center justify-between font-semibold text-xl'>
                    <p ><FiPhoneOutgoing className='inline' /> +880961-333-7448 / +8801799-446655, 01929-554499</p>
                    <p><AiTwotoneMessage className='inline' /> info@peoplentech.com.bd</p>
                 </div>
                 <div className='space-x-4  '>
                    <button className='bg-white p-2 rounded-full text-[#1DA1F2] text-xl'><FaTwitter/></button>
                    <button className='bg-white p-2 rounded-full text-[#1DA1F2] text-xl'><FaFacebook/></button>
                    <button className='bg-white p-2 rounded-full text-[#FF0000] text-xl'><FaYoutube/></button>
                    <button className='bg-white p-2 rounded-full text-[#1DA1F2] text-xl'><FaLinkedin/></button>
                    <button className='bg-[#FF0000] p-2   text-white text-xl rounded font-semibold'>Beta Version</button>
                 </div>
             </div>
            <div className='px-16 flex gap-4 mt-5   items-center'>
                 <div className='flex px-8 space-x-2 items-center'>
                 <img src="/PNT-orginal-PNG (1).png" className='w-[15%]' alt="" />
                <ul className='flex '>
                {navItems.map((item , ind)=>(
                     <Link key={ind} >
                      <li className='mr-3 tracking-wide list-none text-xl font-bold' >{item.title}</li></Link>
                    ))}
                </ul>
                <button className='border duration-300 hover:bg-[#38BDF8] hover:text-white border-[#38BDF8] text-xl font-bold px-6 rounded-lg py-4'>Log in <FaArrowRight className='inline'/></button>
                </div>

            </div>

        </div>
    );
};

export default Header;