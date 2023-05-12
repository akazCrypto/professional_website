import React from 'react'
import './Contact.css'

const Contact = () => {
    return (
        <>
            <div id='email' className='contact_title'>
                <h6>Contact</h6>
            </div>
            <div name='contact' className='max-w-[1500px] m-auto bg-[#c8cbd0] flex justify-center items-center p-4 my-6'>
                <form method="POST" action='https://getform.io/f/8e6c7d43-b886-4eae-8f78-93610c725636' className='flex flex-col max-w-[600px] w-full'>

                    <input className='bg-[#ccd6f6] p-2 shadow-lg' type="text" placeholder='Name' name='name' />
                    <input className='my-4 p-2 bg-[#ccd6f6] shadow-lg' type="email" placeholder='Email' name='email' />
                    <textarea className='bg-[#ccd6f6] p-2 shadow-lg' name="message" rows="10" placeholder='Message'></textarea>
                    <button className='text-gray-600 border-2 hover:bg-[#6f1628] hover:text-white px-4 py-3 my-8 mx-auto flex items-center shadow-lg'>Send the message</button>
                </form>
            </div>
            <br />
        </>
    )
}

export default Contact

/*

.title {
    width: 80%;
    height: 20px;
    margin: 0 auto;
    margin-bottom: 40px;
    font-family: 'QueensidesMedium';
    font-size: 30px;
    padding: 20px 10px 40px 0px;
}


hover:bg-[#6f1628]

max-w-[80%]


<div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#6f1628] text-gray-600'>Contact</p>
                    <p className='text-gray-600 py-4'>Submit the form below or send me an emaoil -- a.kaz.crypto@gmail.com</p>
                </div>
*/
