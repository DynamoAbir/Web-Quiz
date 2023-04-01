import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Quizs = () => {
    const quizData = useLoaderData();

    const { name, questions
    } = quizData.data;
    console.log(quizData.data);
    return (
        <div className="bg-gray-400 text-white ">
            <h1 className='text-white bg-clip-text text-4xl font-extrabold text-transparent sm:text-3xl'
            >Quizzes of {name}</h1>

            <h2 className='
            text-white bg-clip-text text-3xl font-extrabold text-transparent sm:text-2xl my-2'
            > Total {questions.length} Questions .</h2>

            {
                questions.map(quiz => <Quiz key={quiz.id} quiz={quiz}></Quiz>)
            }
        </div>
    );
};

export default Quizs;