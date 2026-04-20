import React, { useContext } from 'react';
import { AppContext } from '../Context/ContextProvider';

const Timeline = () => {
    const { handleCall, handleMessage, handleVideoCall,clicked } = useContext(AppContext)
      console.log(clicked);
    return (
        <div>
          
        </div>
    );
};

export default Timeline;