import React from 'react';
import { BsBookmarkPlus } from 'react-icons/bs';
import { CiDiscount1 } from 'react-icons/ci';
import { GiGraduateCap } from 'react-icons/gi';
import { IoBookSharp, IoPeopleOutline } from 'react-icons/io5';

const Banner = () => { 
    return (
        <div id='banner' className='flex  px-8 items-center mt-10 '>
             <div className='w-1/2 space-y-2'>

                 <p className='text-[#38BDF8] text-xl font-bold'> <span ><BsBookmarkPlus className='inline' /></span> Global Leader In Professional Skill Development & Job <br /> Placement</p>
                 <h1 className='text-4xl font-bold tracking-wide'>
                 Creating Skilled <span className='text-[#EE4B36]'>Manpower, <br /> Freelancer & Entrepreneur </span> <br />  Since 2005
                 </h1>
                 <p className='text-xl text-[#27313e] font-[500]'>
                 Pioneering professional skill development with expert mentors, ensuring continuous success through strategic job placements in the tech sector. A proven pathway to thriving careers in the dynamic digital landscape
                 </p>
 

              <div className='grid grid-cols-2 gap-x-4 gap-y-8 mt-4 '>
                <div className='flex  items-center space-x-4'>
                    <p  className='text-4xl text-[#38BDF8]  bg-white shadow-xl rounded-full  border px-4 py-4'>
                    <IoBookSharp />
                    </p>
                
                <div>
                    <h1 className='text-4xl font-bold'>70+</h1>
                    <p className='text-xl font-semibold'>Courses</p>
                </div>
                </div>

                <div className='flex  items-center space-x-4'>
                    <p className='text-4xl text-[#38BDF8]  bg-white shadow-xl rounded-full  border px-4 py-4'> <IoPeopleOutline/></p>
               
                <div>
                    <h1 className='text-4xl font-bold'>200+</h1>
                    <p className='text-xl font-semibold'>Experienced teachers</p>
                </div>
                </div>

                <div className='flex  items-center space-x-4'>
                    <p className="text-4xl text-[#38BDF8]  bg-white shadow-xl rounded-full  border px-4 py-4">
                <GiGraduateCap />
                     </p>
                <div>
                    <h1 className='text-4xl font-bold'>10K+</h1>
                    <p className='text-xl font-semibold'>Successful students</p>
                </div>
                </div>
              </div>

             </div>
             <div className='w-1/2 relative '>

                <img src="/Hero-Side-Image.webp" alt="" />
                <div className='flex animate-bounce items-center absolute top-[61px] gap-2 -left-[80px] bg-white text-2xl  shadow-xl px-4 py-2 rounded-full font-bold'>
                <CiDiscount1 />
                <p>Get A Discount Offers</p>
                </div>
                <div  className='bg-white animate-bounce rounded-lg shadow-xl absolute right-1 text-2xl font-bold bottom-3 px-4 py-2'>
                    <h1>10K Successful Students</h1>

                </div>
             </div>
        </div>
    );
};

export default Banner;