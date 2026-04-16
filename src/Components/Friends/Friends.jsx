import React from 'react';
import { Link } from 'react-router';

const Friends = ({ friend }) => {
    const {
        id,
        name,
        picture,
        email,
        days_since_contact,
        status,
        categories
    } = friend;

    return (
        <Link to={`friendDetails/${id}`} className="p-5 shadow-2xl  rounded-2xl flex flex-col items-center text-center gap-3 transition-all duration-300 hover:scale-105 hover:shadow-3xl hover:border-[#244D3F]">


            <img
                src={picture}
                alt={name}
                className="w-20 h-20 rounded-full object-cover border-2 border-[#244D3F]"
            />

            <h1 className="text-xl font-bold text-[#244D3F]">{name}</h1>
            <p className="text-sm text-gray-500"> {email}</p>
            <p className="text-sm text-gray-600">{days_since_contact}d ago</p>
            <div>
                {
                    categories.map((category, idx) => <div key={idx} className="badge badge-soft badge-accent ">{category}</div>)
                }
            </div>


            <div className={`badge ${status === "overdue"
                ? "badge-error"
                : status === "almost due"
                    ? "badge-warning"
                    : 'badge-success'}`}>

                {status.charAt(0).toUpperCase() + status.slice(1)}
            </div>
        </Link>
    );
};

export default Friends;