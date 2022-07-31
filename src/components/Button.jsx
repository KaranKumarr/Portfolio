import React from 'react';
import { motion } from 'framer-motion';

export default function Button({ children, type }) {

    const buttonVariant = {
        normal: {
            borderTopLeftRadius: "1rem",
            borderBottomRightRadius: "1rem",
        },
        onHover: {
            borderTopRightRadius: "1rem",
            borderBottomLeftRadius: "1rem",

        },
        onTap: {
            scale: 0.95
        }
    };

    return (
        <motion.button
            variants={buttonVariant}
            initial="normal"
            whileHover="onHover"
            whileTap="onTap"
            type={type ? type : 'button'}
            className='text-blueBell-500 flex justify-center items-center border-2 border-blueBell-500 font-medium text-xl lg:text-2xl mx-2 lg:px-4 px-3 py-1 h-8 xl:h-12'
        >{children}</motion.button>
    );
}
