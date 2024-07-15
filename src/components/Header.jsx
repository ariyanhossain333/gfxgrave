import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between ml-8 mr-8 mt-1 '>
        <div className='flex items-center'>
            <img className='h-14' src={require("../assets/GFX Grave logo.png")} alt="" />
            <h3 className='font-bold text-xl text-white' >GFX Grave</h3>
        </div>
        <ul className='flex items-center pr-7 gap-6 text-white'>
            <li>Home</li>
            <li>Video</li>
            <li>Explore</li>
            <li>Resources</li>
        </ul>
    </div>
  )
}

export default Header
