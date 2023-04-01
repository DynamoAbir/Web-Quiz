import React from 'react';
import { HiArrowRight } from "react-icons/hi";
import { Link } from 'react-router-dom';

const Subject = ({ subject }) => {

    return (
        <div className="card w-96 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={subject.logo} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{subject.name}</h2>
                <p>Total Question:{subject.total}</p>
                <div className="card-actions">
                    <button className="btn btn-secondary bg-gray-700 border-none hover:bg-black"><Link to='/blog'>Start Now<HiArrowRight className='ml-3'></HiArrowRight> </Link></button>
                </div>
            </div>
        </div>
    );
};

export default Subject;