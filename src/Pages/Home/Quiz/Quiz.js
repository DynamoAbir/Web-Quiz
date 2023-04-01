import React from 'react';
import { HiEye } from "react-icons/hi";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Option from '../../../Component/Option/Option';


const Quiz = ({ quiz }) => {
    const { id, question, options, correctAnswer } = quiz;

    const handleSelect = (option) => {
        if (option === correctAnswer) {
            toast.success("Correct Answer !!!", { position: toast.POSITION.TOP_CENTER, autoClose: 1000 })
        }
        else {
            toast.error("Incorrect Answer !!!", { position: toast.POSITION.TOP_CENTER, autoClose: 1000 })
        }

    }
    const handleCorrectAns = () => {
        toast(`Correct Answer is ${correctAnswer}`, { position: toast.POSITION.TOP_CENTER, autoClose: 1000 })
    }
    return (
        <section className="bg-gray-900 text-white">
            <div className='m-12 border border-blue-600 relative'>
                <h2 className="
            font-bold mx-auto mt-8 max-w-xl sm:text-xl sm:leading-relaxed m-8 "
                >Question { }: {question}</h2>
                <div className=' grid lg:grid-cols-2 sm:grid-cols-1 m-16 font-semibold gap-4' >
                    {
                        options.map(option => <Option key={option} option={option} id={id} handleSelect={handleSelect}></Option>)
                    }
                </div>
                <HiEye onClick={() => handleCorrectAns()} className="absolute top-4 right-4 h-6 w-6 text-white" />
            </div>
            <br />
        </section>
    );
};

export default Quiz;