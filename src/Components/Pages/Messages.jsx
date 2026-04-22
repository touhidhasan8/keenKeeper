import React from 'react';

import { LuMessageSquareMore } from "react-icons/lu";

const Messages = ({ messageItem }) => {
    const { type, name, time } = messageItem;


    return (
        <div>
            <h1>
                <div className='flex items-center gap-3 border border-amber-100 p-2 sm:p-3 md:p-4 rounded-xl'>

                    <div>

                        {type === 'message' && <LuMessageSquareMore size={25} />}

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

export default Messages;