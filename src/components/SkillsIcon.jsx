import React from 'react';

export default function SkillsIcon({ img, link }) {
    return (
        <a href={link} className='bg-blueBell-50 bg-opacity-50 opacity-90 hover:opacity-100 transition-all ease-in rounded-md hover:rounded-2xl p-2 flex justify-center items-center'>
            <img src={img} alt="Skill Icon" className='w-28 h-28' />
        </a>
    );
}
