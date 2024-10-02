import React, { useState } from 'react'
import emailjs from '@emailjs/browser';

const Contact2 = () => {
    const [name, setName] = useState ('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        const serviceId = 'service_hu2qnv6';
        const templateId = 'template_0bf7h25';
        const publicKey = 'K82LQt9DBhlEfIIYh';

        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: 'Toluwanimi Amudipe',
            message: message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response);
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  }


  return (
<div name='Contact' className='w-full h-screen bg-[#1b082c] flex justify-center items-center p-4'>
   <form onSubmit={handleSubmit} name='Emailform' className='flex flex-col max-w-[600px] w-full'>
   <div className='pb-8'>
    <div className='text-center'>
            <p className='text-4xl font-bold inline border-b-4 border-purple-800 text-white'>CONTACT</p>
            <p className='text-white py-4 text-2xl'>Submit the form below to get in contact</p>
        </div>
        </div>
    <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}/>
    <input className='my-4 p-2 bg-[#ccd6f6]' type="text" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
    <textarea  className='bg-[#ccd6f6]' name="message" rows="11" placeholder='Message' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
    <button className='bg-[#633d85] hover:bg-[#654880] text-white rounded px-4 py-3 my-8 mx-auto flex items-center' type='submit'> Let's Collaborate</button>
    </form>
</div>
  )
}

export default Contact2
