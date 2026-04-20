import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const AppContext = createContext();

const ContextProvider = ({ children }) => {

    const [clicked, setClicked] = useState([]);
    

    const handleCall = (id, name) => {
        const newData = {
            id: parseInt(id),
            name,
            type: "call",
            time: new Date().toLocaleString()
        };

        setClicked([...clicked, newData]);

        toast.success(`Calling ${name}`);
        console.log(clicked);

    };
    const handleMessage = (id, name) => {
        const newData = {
            id: parseInt(id),
            name,
            type: "message",
            time: new Date().toLocaleString()
        };

        setClicked([...clicked, newData]);

        toast.info(`Message sent to ${name}`);
        console.log(clicked);

    };
    const handleVideoCall = (id, name) => {
        const newData = {
            id: parseInt(id),
            name,
            type: "video",
            time: new Date().toLocaleString()
        };

        setClicked([...clicked, newData]);

        toast.warn(`Video calling ${name}`);
        console.log(clicked);
        
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