import React from 'react';
import vectorImg from './resources/imgs/instruments.svg';
import Icons from './Icons';

export default function PersonalInfo() {



    return (
        <>

            <div className='flex justify-center relative bottom-0 '>
                <img src={vectorImg} alt="vector img"
                    className='lg:w-auto w-2/4 '
                />
            </div>
            <div className='bg-blueBell-600 text-white text-center lg:p-40 md:p-28 sm:p-16 p-8'>
                <h1 className='font-bold main-heading sm:my-10 my-4'>HI, I AM KARAN KUMAR.</h1>
                <p className='subtitle'>
                    I am a rising junior at Szabist University majoring in CS. I also do freelance work on Fiverr, mainly I work on web development. I have worked on multiple languages and technologies but go-to programming language has always been Javascript. I am currently looking for internship OR full-time opportunity to learn new skills and sharpen already existing ones.
                </p>
                <div className='flex justify-center items-center'>
                    <Icons />
                </div>
            </div>

        </>

    );
}
