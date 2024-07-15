import React from 'react'

const TrendingPage = () => {
  return (
    <div>
        <div>
            <h2 className='text-white font-bold flex justify-center mt-9 text-[35px]  mb-7 ' >⚡ Trending Categories</h2>

            <div className='flex justify-evenly gap-6 mt-3 mb-6'>
    <div>
    <div >
      <div className=' w-[190px]  rounded-lg  '> <img className='rounded-xl  h-[250px] w-[200px] '  src={require("../assets/Bike copy.jpg")} alt="" /> </div>
      <p className='text-white mt-4 flex justify-center'></p>
    </div> <br />

    <div  >
      <div className=' w-[190px] rounded-lg '> <img className='rounded-xl  h-[250px] w-[200px] '  src={require("../assets/Came copy.jpg")} alt="" /> </div>
      <p className='text-white mt-4 flex justify-center'></p>
    </div>  <br />

  </div>
  <div>
  <div >
      <div className=' w-[190px] rounded-lg '> <img className='rounded-xl  h-[250px] w-[200px] '  src={require("../assets/Headphone 1 copy.jpg")} alt="" /> </div>
      <p className='text-white mt-4 flex justify-center'></p>
    </div>  <br />

    <div  >
      <div className=' w-[190px] rounded-lg  '> <img className='rounded-xl   h-[250px] w-[200px] '  src={require("../assets/insta 1 copy.jpg")} alt="" /> </div>
      <p className='text-white mt-4 flex justify-center'></p>
    </div>  <br />
  
  </div>
  <div>
  <div >
      <div className=' w-[190px] rounded-lg  '> <img className='rounded-xl  h-[250px] w-[200px] '  src={require("../assets/pena post copy.jpg")} alt="" /> </div>
      <p className='text-white mt-4 flex justify-center'></p>
    </div>  <br />

      <div >
      <div className=' w-[190px] rounded-lg  '> <img className='rounded-xl h-[250px] w-[200px] '  src={require("../assets/Momos copy.jpg")} alt="" /> </div>
      <p className='text-white mt-4 flex justify-center'></p>
    </div>  <br />
  
  </div>
  <div>
  <div  >
      <div className=' w-[190px]  rounded-lg  '> <img className='rounded-xl h-[250px] w-[200px]'  src={require("../assets/sho 1 copy.jpg")} alt="" /> </div>
      <p className='text-white mt-4 flex justify-center '></p>
    </div> <br />

    <div >
      <div className=' w-[190px] rounded-lg  '> <img className='rounded-xl h-[250px] w-[200px] '  src={require("../assets/watch 1 copy.jpg")} alt="" /> </div>
      <p className='text-white mt-4 flex justify-center'  ></p>
    </div> 
  
  </div>
  
  
  </div>
    
        </div>
    </div>
  )
}

export default TrendingPage
