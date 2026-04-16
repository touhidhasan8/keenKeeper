import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const FriendDetails = () => {
    const {id}=useParams()
    console.log(id , 'id');
    
    const friend = useLoaderData()
    console.log(friend);
    
    return (
        <div>
            friends details page 
        </div>
    );
};

export default FriendDetails;