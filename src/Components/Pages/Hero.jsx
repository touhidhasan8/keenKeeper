import React from 'react';
import { FaPlus } from 'react-icons/fa';

const Hero = () => {
    return (
        <div className='px-4'>
            <h1 className='font-bold text-3xl md:text-5xl text-center mt-12 text-[#244D3F] leading-tight'>
                Friends to keep close in your life
            </h1>

            <p className='text-center mt-5 text-[#64748B] text-sm md:text-base max-w-2xl mx-auto'>
                Your personal shelf of meaningful connections. Browse, tend, and nurture the
                <br className='hidden md:block' /> relationships that matter most.
            </p>

            <div className='flex justify-center mt-8 mb-10'>
                <button className='flex items-center gap-2 bg-[#244D3F] hover:opacity-90 transition-opacity px-6 py-3 rounded-lg text-white font-medium'>
                    <FaPlus size={14} />
                    <span>Add a Friend</span>
                </button>
            </div>
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4'>
                <div className='p-5 shadow-2xl rounded-2xl flex flex-col items-center justify-center'>
                    <h1 className='text-3xl font-bold text-[#244D3F]'>10</h1>
                    <p className='text-gray-500 font-medium'>Total Friends</p>
                </div>
                <div className='p-5 shadow-2xl rounded-2xl  flex flex-col items-center justify-center'>
                    <h1 className='text-3xl font-bold text-[#244D3F]'>3</h1>
                    <p className='text-gray-500 font-medium'>On Track</p>
                </div>
                <div className='p-5 shadow-2xl rounded-2xl  flex flex-col items-center justify-center'>
                    <h1 className='text-3xl font-bold text-[#244D3F]'>6</h1>
                    <p className='text-gray-500 font-medium'>Need Attention</p>
                </div>
                <div className='p-5 shadow-2xl rounded-2xl  flex flex-col items-center justify-center'>
                    <h1 className='text-3xl font-bold text-[#244D3F]'>12</h1>
                    <p className='text-gray-500 font-medium'>Interactions This Month</p>
                </div>
            </div>
        </div>
    );
};

export default Hero;