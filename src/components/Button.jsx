import React from 'react';
import { motion } from 'framer-motion';

export default function Button({ children }) {

    const buttonVariant = {
        normal: {
            borderRadius: '1rem'
        },
        onHover: {
            borderRadius: '1.1rem',
            scale: 1.05
        },
        onTap: {
            borderRadius: '0.9rem',
            scale: 0.95
        }
    };

    return (
        <motion.button
            variants={buttonVariant}
            initial="normal"
            whileHover="onHover"
            whileTap="onTap"
            className='text-blueBell-500 border-2 border-blueBell-500 font-medium text-2xl mx-2 px-4 py-1 h-12'
        >{children}</motion.button>
    );
}
