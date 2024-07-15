import React from 'react'

const FirstPage = () => {
  return (
    <div className='flex justify-around items-center '>
      <div>
        <h1 className='text-[65px] font-bold text-white'>Graphic Designer</h1>
        <p className='text-white text-[30px]'>The world's largest digital marketplace <br /> for crypto collectibles and non fungible <br />tokens.</p>
        <button className='border border-none outline-none px-8 py-[5px] bg-blue-700 text-white rounded-2xl text-[13px] mt-2'>More</button>
      </div>
      <div>
        <img className='h-[250px] rounded-[60px] rotate-7 mt-9' src= {require("../assets/GFX Grave copy.jpg")} alt="" />
      </div>
    </div>
  )
}

export default FirstPage
