import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-between pb-16 '>
      <div className='mt-[50px]'>
        <div className='flex items-center'>
          <img className='h-14 ml-7' src={require("../assets/GFX Grave logo.png")} alt="" />
          <h3 className='font-bold text-xl text-white' >GFX Grave</h3>
        </div>
        <p className='text-white ml-7 mb-3 font-abc text-[20px] ' >Create sale and collect truly rare digital artworks. <br /> Powered by Blockchain Technology.</p>
        <div className='ml-7 '>
          <i class="fa-brands fa-instagram"></i> &nbsp;
          <i class="fa-brands fa-facebook"></i> &nbsp;
          <i class="fa-brands fa-linkedin"></i> &nbsp;
          <i class="fa-brands fa-discord"></i> &nbsp;
          <i class="fa-brands fa-twitter"></i> &nbsp;
          <i class="fa-brands fa-telegram"></i> &nbsp;
        </div>
      </div>

      <div className='flex gap-x-14 mr-9 mt-[50px] text-[20px]  '>
        <ul className='text-white'>
          <p className='text-white font-bold mb-3'>Marketplace</p>
          <li>Art</li>
          <li>Music</li>
          <li>Domain Names</li>
          <li>Collectibles</li>
          <li>Virtual World</li>
        </ul>
        <ul className='text-white'>
          <p className='text-white font-bold mb-3'>Company</p>
          <li>Exploret</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Our Blog</li>
          <li>FAQ</li>
        </ul>
        <ul className='text-white '>
          <p className='text-white font-bold mb-3' >My Account</p>
          <li>Authors</li>
          <li>Collection</li>
          <li>Author Profile</li>
          <li>Collectibles</li>
          <li>Create Item</li>
        </ul>
      </div>

    </div>
  )
}

export default Footer
