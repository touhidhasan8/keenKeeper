import React from 'react';
import { FiArchive, FiEdit3, FiPhone, FiMail } from 'react-icons/fi';
import { HiOutlineBellSnooze } from 'react-icons/hi2';
import { RiDeleteBin5Line, RiVideoChatLine } from 'react-icons/ri';
import { useLoaderData, useParams } from 'react-router';

const FriendDetails = () => {
    const { id } = useParams();
    const friends = useLoaderData();
    const friendDetails = friends?.find(friend => friend.id === parseInt(id));



    const { name, picture, days_since_contact, status, bio, next_due_date, categories } = friendDetails;


    const goal_days = friendDetails.goal_days || 30;

    const textGreen = 'text-[#244D3F]';
    const bgGreen = 'bg-[#244D3F]';

    return (
        <div className='container mx-auto px-4 py-8 bg-[#F8FAFC]'>

            <div className='grid grid-cols-1 md:grid-cols-12 gap-6'>


                <div className='md:col-span-4 space-y-6'>

                    <div className='bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center'>
                        <div className="relative mb-5">
                            <img
                                src={picture}
                                alt={name}
                                className="w-24 h-24 rounded-full object-cover border-4 border-gray-100 p-1"
                            />
                        </div>

                        <h1 className={`text-xl font-bold ${textGreen}`}>{name}</h1>

                        <div className="flex flex-wrap justify-center gap-2 mt-2">
                            <span className={`badge badge-sm py-2 px-3 text-white font-medium ${status === "overdue" ? "bg-red-500 border-red-500" : bgGreen + ' border-none'}`}>
                                {status.toUpperCase()}
                            </span>
                            {categories.map((category, idx) => (
                                <span key={idx} className={`badge badge-sm py-2 px-3 text-white font-medium ${bgGreen + ' border-none'}`}>
                                    {category.toUpperCase()}
                                </span>
                            ))}
                        </div>


                        <p className={`text-sm ${textGreen} mt-5 leading-relaxed italic`}>
                            {bio ? `"${bio}"` : '"No bio set yet."'}
                        </p>

                        <p className={`text-xs text-gray-400 mt-4`}>
                            Preferred: {categories.includes('work') ? 'slack' : 'email'}
                        </p>
                    </div>


                    <div className='bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-2'>
                        <button className="btn btn-ghost hover:bg-gray-50 flex items-center justify-start gap-3 w-full border-none text-gray-700 capitalize font-medium text-sm">
                            <HiOutlineBellSnooze size={18} /> Snooze 2 weeks
                        </button>
                        <button className="btn btn-ghost hover:bg-gray-50 flex items-center justify-start gap-3 w-full border-none text-gray-700 capitalize font-medium text-sm">
                            <FiArchive size={16} /> Archive
                        </button>
                        <button className="btn btn-ghost hover:bg-red-50 text-red-500 flex items-center justify-start gap-3 w-full border-none capitalize font-medium text-sm mt-1">
                            <RiDeleteBin5Line size={16} /> Delete
                        </button>
                    </div>
                </div>


                <div className='md:col-span-8 space-y-6'>

                    <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
                        <div className='bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center flex flex-col justify-center min-h-[140px]'>
                            <p className={`text-4xl font-extrabold ${textGreen}`}>{days_since_contact}</p>
                            <h2 className="text-xs font-medium text-gray-400 mt-2 uppercase tracking-wide">Days Since Contact</h2>
                        </div>
                        <div className='bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center flex flex-col justify-center min-h-[140px]'>
                            <p className={`text-3xl font-extrabold ${textGreen}`}>{goal_days}</p>
                            <h2 className="text-xs font-medium text-gray-400 mt-2 uppercase tracking-wide">Goal (Days)</h2>
                        </div>
                        <div className='bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center flex flex-col justify-center min-h-[140px]'>
                            <p className={`text-2xl font-bold ${textGreen}`}>{next_due_date || 'N/A'}</p>
                            <h2 className="text-xs font-medium text-gray-400 mt-2 uppercase tracking-wide">Next Due</h2>
                        </div>
                    </div>


                    <div className='bg-white p-6 rounded-2xl shadow-sm border border-gray-100'>
                        <div className='flex justify-between items-center mb-4'>
                            <h3 className={`text-base font-semibold ${textGreen}`}>Relationship Goal</h3>
                            <button className='btn btn-xs btn-outline hover:bg-gray-50 border-gray-200 text-gray-600 px-3 flex items-center gap-1.5'>
                                <FiEdit3 size={12} /> Edit
                            </button>
                        </div>
                        <div className={`p-4 rounded-xl border border-dotted border-gray-300 ${textGreen}`}>
                            <p className="font-semibold text-sm">
                                Connect every <span className='font-extrabold'>30 days</span>
                            </p>
                        </div>
                    </div>


                    <div className='bg-white p-6 rounded-2xl shadow-sm border border-gray-100'>
                        <h3 className={`text-base font-semibold ${textGreen} mb-5`}>Quick Check-In</h3>
                        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>

                            <button className="btn btn-ghost bg-gray-50 hover:bg-gray-100 border-none rounded-xl flex flex-col items-center justify-center gap-2 h-auto py-5 w-full">
                                <FiPhone size={24} className="text-gray-600" />
                                <span className="text-sm font-medium text-gray-700">Call</span>
                            </button>

                            <button className="btn btn-ghost bg-gray-50 hover:bg-gray-100 border-none rounded-xl flex flex-col items-center justify-center gap-2 h-auto py-5 w-full">
                                <FiMail size={24} className="text-gray-600" />
                                <span className="text-sm font-medium text-gray-700">Text</span>
                            </button>

                            <button className="btn btn-ghost bg-gray-50 hover:bg-gray-100 border-none rounded-xl flex flex-col items-center justify-center gap-2 h-auto py-5 w-full">
                                <RiVideoChatLine size={24} className="text-gray-600" />
                                <span className="text-sm font-medium text-gray-700">Video</span>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FriendDetails;