import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const AppContext = createContext();

const ContextProvider = ({ children }) => {

    const [clicked, setClicked] = useState([]);

    const handleCall = (id, name) => {

        setClicked([...clicked, id]);
        toast.success(`Calling ${name}`);
        console.log(clicked);
        
    };

    const handleMessage = (id, name) => {
        setClicked([...clicked, id]);
        toast.info(`Message sent to ${name}`);
    };

    const handleVideoCall = (id, name) => {
        setClicked([...clicked, id]);
        toast.warn(`Video calling ${name}`);
    };

    const data = {
        clicked,
        handleCall,
        handleMessage,
        handleVideoCall
    };

    return (
        <AppContext.Provider value={data}>
            {children}
        </AppContext.Provider>
    );
};

export default ContextProvider;