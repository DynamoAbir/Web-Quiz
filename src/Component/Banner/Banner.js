import React from 'react';
import { useLoaderData } from 'react-router-dom';
import image from '../../Assets/quiz-2.jpg'
import Subjects from '../Subjects/Subjects';

const Banner = () => {

    return (
        <div className="hero ">
            <div className="hero-content flex-col lg:flex-row">
                <img src={`${image}`} className="max-w-sm rounded-lg shadow-2xl" />
                <div className='mx-20 '>
                    <h1 className="mb-5 text-5xl font-bold ">Welcome to WeβQuiz</h1>
                    <h3 className="mb-5 text-3xl">Lets test your Programming Skill</h3>
                    <p className="mb-5 text-2x">Here you can test your skills on React,JavaScript,CSS and Git</p>
                </div>
            </div>


        </div>
    );
};


export default Banner;