import React from 'react'

const Contact = () => {
  return (
    <div>
        <h2 className='text-white font-bold flex justify-center mt-7 text-[35px]'>Contact Us</h2>
        <p className='text-white flex justify-center mt-2 font-[30px] '>Lorem ipsum dolor sit amet consectetur adipisicing elit.  <br />Sapiente molestias amet delectus? Porro, numquam minima.</p>
       <form className='flex justify-evenly mt-2'>
             <div className='flex flex-col'>
                <input className='border border-solid border-white bg-transparent w-[250px] rounded-md px-6 py-2  mb-5  mt-6  text-sm outline-none   ' type="text" placeholder='Your Name' /> 
                <input  className='border border-solid border-white bg-transparent w-[250px] rounded-md px-6 py-2 mb-5 text-sm outline-none '   type="email" placeholder='Your Email' />
                <input className='border border-solid border-white bg-transparent w-[250px]  px-6 py-2 rounded-md  mb-4 text-sm outline-none ' type="number" placeholder='Your Number' />

             </div>
             <div>
                <textarea className='border border-solid border-white bg-transparent w-[250px]  px-6 py-2 rounded-md  mb-4 text-sm mt-6 outline-none ' placeholder='Your Message' name="" id=""  rows="7" cols="30"></textarea>
             </div>
       </form>
       <button className=' ml-[530px] flex justify-center mt-7  border border-none outline-none px-8 py-[5px]  bg-blue-700 text-white rounded-2xl text-[13px] '>Submit</button>
    </div>
  )
}

export default Contact
