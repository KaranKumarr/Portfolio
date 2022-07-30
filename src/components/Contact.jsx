import React from 'react';
import Button from './Button';
import contactUs from './resources/imgs/contact-us.svg';

function Contact() {
    return (
        <div name='contact'
            className='flex flex-col md:flex-row items-center justify-around bg-blueBell-600 lg:p-40 md:p-28 sm:p-16 p-8'>

            <div className=' text-white  h-full w-full'>
                <div className='my-4'>
                    <h1 className='sec-heading font-semibold'>Contact Me</h1>
                    <p className='subtitle'>Interested in working together, Or Want to contact me for chat?</p>
                </div>
                <div className='flex flex-col justify-between'>
                    <p className='subtitle  py-2'>
                        Karachi, Pakistan
                    </p>
                    <a className='subtitle  py-2 underline' href="mailto:Karankumar0334@gmail">
                        Karankumar0334@gmail.com
                    </a>
                    <a className='subtitle  py-2 underline'
                        href={require('./resources/files/KaranKumar.pdf')} download={'Karan Kumar'}
                    >
                        Resume
                    </a>
                </div>
                <div className='flex items-start justify-start w-full'>
                    <img src={contactUs} alt="contact-us" className='w-4/5 sm:m-0 my-6' />
                </div>
            </div>
            {/* Contact Form */}
            <div className='flex flex-col  bg-white h-full w-full py-12 px-8 rounded-md '>
                <label htmlFor="contactName" className='subtitle text-blueBell-600 font-semibold'>Name</label>
                <input type="text" name='contactName' className=' border-2 border-blue-100  focus:outline-none focus:border-blueBell-500  rounded-md subtitle  ' />
                <label htmlFor="contactEmail" className='subtitle text-blueBell-600 font-semibold mt-12'>Email</label>
                <input type="email" name="contactEmail" className=' border-2 border-blue-100  focus:outline-none focus:border-blueBell-500  rounded-md subtitle  ' />
                <label htmlFor="contactMessage" className='subtitle text-blueBell-600 font-semibold mt-12'>Message</label>
                <textarea type="text" name="contactMessage"
                    className=' border-2 border-blue-100  focus:outline-none focus:border-blueBell-500  rounded-md subtitle  mb-12' ></textarea>
                <Button> Send Message </Button>
            </div>
        </div>
    );
}

export default Contact;