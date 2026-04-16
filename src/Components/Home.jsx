import React from 'react';
import Hero from './Pages/Hero';
import { useLoaderData } from 'react-router';
import Friends from './Friends/Friends';

const Home = () => {
    const friendsData = useLoaderData()


    return (
        <div className='container mx-auto' >
            <Hero></Hero>
            <h1 className='text-2xl font-bold'> Your Friends</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4'>
                {
                    friendsData.map(friend => <Friends key={friend.id} friend={friend}></Friends>)
                }
            </div>
        </div>
    );
};

export default Home;