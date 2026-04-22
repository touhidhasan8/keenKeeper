import React from 'react';
import { FaVideo } from 'react-icons/fa';


const Videos = ({ videoItem }) => {
    const { type, name, time } = videoItem;

    
    return (
       
        <div>
            <h1>
                <div className='flex items-center gap-3 border border-amber-100 p-2 sm:p-3 md:p-4 rounded-xl'>

                    <div>
                        
                        {type === 'video' && <FaVideo size={25} />}
                    </div>

                    <div className='min-w-0'>
                        <h1 className='text-base sm:text-lg md:text-xl truncate'>
                            Meetup With{" "}
                            <span className='font-semibold text-[#244D3F]'>
                                {name}
                            </span>
                        </h1>

                        <p className='text-xs sm:text-sm text-gray-500'>
                            {time}
                        </p>
                    </div>

                </div>
            </h1>
        </div>
    );
};

export default Videos;