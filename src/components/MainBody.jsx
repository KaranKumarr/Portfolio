import React from 'react';
import avatar from './resources/imgs/avatar.svg';

export default function MainBody() {
    return (
        <main className=' w-full h-full flex flex-col items-center justify-center lg:mt-8 my-6'>
            <div className=''>
                <h1 className='text-blueBell-700 text-center  main-heading font-bold'>STUDENT, DEVELOPER & PROBLEM SOLVER</h1>
                <h3 className='text-blueBell-600 text-center subtitle'>I am student of CS and I like problem solving.</h3>
            </div>
            <div className='lg:my-16 my-8 flex justify-center items-center'>
                <img src={avatar} alt="AVATAR"
                    className='xl:w-full md:w-4/5 sm:w-3/5 w-2/5'
                />
            </div>


        </main>
    );
}
