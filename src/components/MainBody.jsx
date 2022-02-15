import React from 'react';
import avatar from './resources/imgs/avatar.svg';
import vectorImg from './resources/imgs/instruments.svg';

export default function MainBody() {
    return (
        <main className='w-full h-full flex flex-col items-center justify-center mt-8'>
            <div className=''>
                <h1 className='text-blueBell-700 lg:text-4xl xl:text-5xl font-bold'>STUDENT, DEVELOPER & PROBLEM SOLVER</h1>
                <h3 className='text-blueBell-600 text-center text-3xl'>I am student of CS and I like problem solving.</h3>
            </div>
            <div className='my-16'>
                <img src={avatar} alt="AVATAR"
                    className=''
                />
            </div>
            <div className=''>
                <img src={vectorImg} alt="vector img"

                />
            </div>

        </main>
    );
}
