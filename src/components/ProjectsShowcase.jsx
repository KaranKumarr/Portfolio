import React from 'react';
import ProjectCard from './ProjectCard';
import cinematoIcon from './resources/imgs/cinemato.png';
import chatcordIcon from './resources/imgs/chatcord.png';
import deliciousIcon from './resources/imgs/delicious-recipes.png';
import wallpaperChangerApp from './resources/imgs/wallpaper-changer.png';
import javascriptIcon from './resources/imgs/project-javascript.svg';
import reactIcon from './resources/imgs/project-react.svg';
import cssIcon from './resources/imgs/project-css.svg';
import nodejsIcon from './resources/imgs/project-nodejs.svg';
import socketioIcon from './resources/imgs/project-socketio.svg';
import javaIcon from './resources/imgs/project-java.svg';
import androidIcon from './resources/imgs/project-android.svg';

function ProjectsShowcase() {

    const projects = [
        {
            title: 'Cinemato',
            icon: cinematoIcon,
            description: 'A website that showcases trending and best movies and tv shows, as well as allows users to search shows and movies to know more about them',
            techUsed: [javascriptIcon, reactIcon, cssIcon]
        },
        {
            title: 'Delicious Recipes',
            icon: deliciousIcon,
            description: 'A simple recipe finder app that helps user find recipe based on categories and their search terms.',
            techUsed: [javascriptIcon, reactIcon, cssIcon]
        },
        {
            title: 'ChatCord',
            icon: chatcordIcon,
            description: 'A Web App that allows users to join a chatroom to have discussions about their favourite programming language',
            techUsed: [nodejsIcon, socketioIcon]
        },
        {
            title: 'Wallpaper Changer',
            icon: wallpaperChangerApp,
            description: 'A android mobile app that allows users to change their wallpaper by searching through an external api',
            techUsed: [javaIcon, androidIcon]
        }
    ];


    return (
        <div className='container-border my-32 py-10 lg:mx-30 lg:px-10 md:mx-18 md:px-10 sm:mx-10 sm:px-6 mx-4 px-4'>
            <h1 className='text-blueBell-500 font-bold sec-heading'>
                Projects
            </h1>
            <p className='text-blueBell-500 subtitle tracking-wider text-center p-2'>
                These are some of my projects that I built learn more about the technologies and also to experiment with things that I already knew
            </p>
            <div className='projects-grid-layout'>
                {projects.map((project, index) => {
                    return (<ProjectCard
                        key={index}
                        title={project.title}
                        icon={project.icon}
                        description={project.description}
                        technologies={project.techUsed}
                    />);
                })}
            </div>
        </div>
    );
}

export default ProjectsShowcase;