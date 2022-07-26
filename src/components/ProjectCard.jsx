import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';


function useMediaQuery(query) {
    const [matches, setMatches] = useState(true);

    useEffect(() => {
        const media = window.matchMedia(query);
        if (media.matches !== matches) {
            setMatches(media.matches);
        }
        const listener = () => {
            setMatches(media.matches);
        };
        media.addListener(listener);
        return () => media.removeListener(listener);
    }, [matches, query]);

    return matches;
}

function ProjectCard({ title, icon, description, technologies }) {



    const isSmall = useMediaQuery('(min-width: 768px)');
    console.log(isSmall);

    const technologiesMotion = isSmall ? {
        rest: {
            y: "-25%",
            opacity: 0,
            transition: {
                duration: 0.4,
                type: "tween",
                ease: "easeIn"
            }
        },
        hover: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.2,
                type: "tween",
                ease: "easeOut"
            }
        },
    } : {};
    const descriptionMotion = isSmall ? {
        rest: {
            y: "25%",
            opacity: 0,
            transition: {
                duration: 0.4,
                type: "tween",
                ease: "easeIn"
            }
        },
        hover: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.2,
                type: "tween",
                ease: "easeOut"
            }
        },
    } : {};

    return (
        <motion.div initial="rest" whileHover="hover" animate="rest"
            className=' w-11/12 h-11/12 relative  m-4  cursor-pointer'>


            {/* Technologies Icons that will show on hover */}
            <motion.div
                className='flex justify-center absolute top-0 w-full  px-2 py-4' variants={technologiesMotion}
            >
                {technologies.map((tech, index) => {
                    if (!isSmall && index >= 3) {
                        return <div></div>;
                    }
                    return (
                        <motion.img
                            className='mx-4 border h-12 w-12 md:h-16 md:w-16 border-blueBell-700 p-1 rounded-2xl bg-white bg-opacity-10'
                            src={tech} alt={"tech icon: " + index} key={index} />
                    );
                })}
            </motion.div>


            {/* Default Content */}
            <div className='bg-blueBell-50 text-blueBell-600 hover:shadow-lg transition-all hover:bg-blueBell-100 hover:text-blueBell-700  flex items-center justify-center flex-col
            py-28 rounded-3xl
            '>
                <img className=' h-28' src={icon} alt={title} />
                <h2 className=' text-2xl font-bold text-blueBell-white tracking-widest uppercase '>
                    {title}
                </h2>

            </div>


            {/* Description that will show on hover */}
            <motion.p variants={descriptionMotion}
                className='text-center absolute md:bottom-6 bottom-10  font-medium text-blueBell-700 p-2 text-xs md:text-base capitalize'>
                {description}
            </motion.p>
        </motion.div>
    );
}

export default ProjectCard;