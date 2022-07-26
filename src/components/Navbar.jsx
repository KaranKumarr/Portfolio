import React from 'react';
import { Link } from 'react-scroll';
import Logo from './Logo';
import Button from './Button';
import { motion } from 'framer-motion';

export default function Navbar() {


    const containerVariant = {
        hidden: {
            x: '-50vw',
        },
        visible: {
            x: 0,
            transition: {
                delay: 0.1,
                when: "beforeChildren",
                staggerChildren: 0.1
            },

        }
    };

    const childVariant = {
        hidden: {
            x: 10,
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1,
        },
    };

    return (

        <nav className='flex justify-between items-center p-6'>
            <Logo />
            <motion.div
                variants={containerVariant}
                initial="hidden"
                animate="visible"
                className='flex '
            >
                {/* toggle dark mode */}
                {/* <motion.div variants={childVariant}>
                    <Button>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 lg:h-6 lg:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg>

                    </Button>
                </motion.div> */}
                <motion.div
                    variants={childVariant}
                >
                    <Link to="contact" spy={true} smooth={true} offset={150} duration={500}>
                        <Button>Contact Me</Button>
                    </Link>
                </motion.div>
            </motion.div>
        </nav>

    );
}
