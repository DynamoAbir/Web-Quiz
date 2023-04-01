import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Subject from './Subject';

const Subjects = () => {
    const subdata = useLoaderData();
    return (
        <div className='grid lg:grid-cols-4  gap-28 sm:grid-cols-1 my-52 mx-52'>
            {
                subdata.data.map(subject => <Subject key={subject.id} subject={subject}></Subject>)
            }
        </div>
    );
};

export default Subjects;