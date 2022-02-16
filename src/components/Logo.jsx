import React from 'react';
import { motion } from 'framer-motion';

export default function Logo() {

    const containerVariant = {
        hidden: {
            x: '-50vw',
        },
        visible: {
            x: 0,
            transition: {
                delay: 0.25,
                when: "beforeChildren",
                staggerChildren: 0.25
            },

        }
    };

    const titleVariant = {
        hidden: {
            x: -10,
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1,

        },
    };

    return (
        <motion.div
            variants={containerVariant}
            initial="hidden" animate="visible"
            className='text-blueBell-500  main-heading'
        >
            <motion.div variants={titleVariant}  >Karan</motion.div>
            <motion.div variants={titleVariant} className='mx-4'>Kumar</motion.div>
        </motion.div>
    );
}
