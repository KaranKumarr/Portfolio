import React from 'react';
import Button from './Button';

function Contact() {
    return (
        <div className='flex items-center justify-around bg-blueBell-600 lg:p-40 md:p-28 sm:p-16 p-8'>

            <div className=' text-white  h-full w-full'>
                <div className='my-4'>
                    <h1 className='sec-heading font-semibold'>Contact Me</h1>
                    <p className='subtitle'>Interested in working together, Or Want to contact me for chat?</p>
                </div>
                <div className='flex flex-col justify-between'>
                    <p className='subtitle  py-2'>
                        Karachi, Pakistan
                    </p>
                    <a className='subtitle  py-2 underline' href="emailto:Karankumar0334@gmail">
                        Karankumar0334@gmail.com
                    </a>
                    <a className='subtitle  py-2 underline' href="/">
                        Resume
                    </a>
                </div>
            </div>
            {/* Contact Form */}
            <div className='flex flex-col  bg-white h-full w-full py-12 px-8 rounded-md '>
                <label htmlFor="contactName" className='subtitle text-blueBell-600 font-semibold'>Name</label>
                <input type="text" name='contactName' className='ring-2 ring-blueBell-100 focus:ring-blueBell-500 focus:border-0 focus:outline-none focus:border-blueBell-500  rounded-md subtitle  ' />
                <label htmlFor="contactEmail" className='subtitle text-blueBell-600 font-semibold mt-12'>Email</label>
                <input type="email" name="contactEmail" className='ring-2 ring-blueBell-100 focus:ring-blueBell-500 focus:border-0 focus:outline-none focus:border-blueBell-500  rounded-md subtitle  ' />
                <label htmlFor="contactMessage" className='subtitle text-blueBell-600 font-semibold mt-12'>Message</label>
                <textarea type="text" name="contactMessage"
                    className='ring-2 ring-blueBell-100 focus:ring-blueBell-500 focus:border-0 focus:outline-none focus:border-blueBell-500  rounded-md subtitle  mb-12' ></textarea>
                <Button> Send Message </Button>
            </div>
        </div>
    );
}

export default Contact;