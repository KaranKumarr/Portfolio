import React from 'react';

export default function SkillsIcon({ img, link }) {
    return (
        <a href={link} className='bg-blueBell-50 cursor-default bg-opacity-50 opacity-90 hover:opacity-100 transition-all ease-in rounded-md hover:rounded-2xl p-4 flex justify-center items-center'>
            <img src={img} alt="Skill Icon" className='md:w-28 md:h-28 sm:w-24 sm:h-24 w-20 h-20' />
        </a>
    );
}
