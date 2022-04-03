import React from 'react';
import SkillsIcon from './SkillsIcon';
import react from './resources/imgs/ReactJS.svg';
import nodejs from './resources/imgs/NodeJS.svg';
import mysql from './resources/imgs/mysql.svg';
import mongodb from './resources/imgs/MongoDB.svg';
import git from './resources/imgs/GIT.svg';
import tailwindcss from './resources/imgs/TailwindCss.svg';

export default function Skills() {
    return (
        <div className='border-blueBell-400 md:border-4 md:border-r-8 md:border-b-8 border-2 border-r-4 border-b-4 rounded-3xl  my-10 py-10 lg:mx-30 lg:px-10 md:mx-18 md:px-10 sm:mx-10 sm:px-6 mx-4 px-4'>
            <h1 className='text-blueBell-500 font-bold sec-heading'>Skills</h1>
            <p className='text-blueBell-500 subtitle tracking-wider text-center p-2'>I'm fascinated by cutting-edge technologies. Here are some skills and tools that I am comfortable with or currently learning.</p>
            <div className='grid grid-layout grid-cols-2 sm:p-12 py-8 px-6'>
                <SkillsIcon link={'#'} img={react} />
                <SkillsIcon link={'#'} img={nodejs} />
                <SkillsIcon link={'#'} img={mysql} />
                <SkillsIcon link={'#'} img={mongodb} />
                <SkillsIcon link={'#'} img={git} />
                <SkillsIcon link={'#'} img={tailwindcss} />
            </div>
        </div>
    );
}
