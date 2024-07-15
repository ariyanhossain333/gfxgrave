import React from 'react'

const CardDesign = () => {
  return (
    <div className='flex justify-evenly gap-9 mt-3 mb-6  animate-loop-scroll '>
      <div>
        <div>
          <div className=' w-[190px]  rounded-lg  '> <img className='rounded-xl  h-[250px] w-[200px]' src={require("../assets/Bike copy.jpg")} alt="" />
          </div>

        </div> <br />

        <div  >
          <div className=' w-[190px] mt-4 rounded-lg  '> <img className='rounded-xl   h-[250px] w-[200px] ' src={require("../assets/Came copy.jpg")} alt="" /> </div>
          <p className='text-white  flex justify-center'></p>
        </div>  <br />

      </div>
      <div>
        <div >
          <div className=' w-[190px]  rounded-lg  '> <img className='rounded-xl   h-[250px] w-[200px] ' src={require("../assets/Headphone 1 copy.jpg")} alt="" /> </div>
          <p className='text-white mt-4 flex justify-center'></p>
        </div>  <br />

        <div  >
          <div className=' w-[190px]  rounded-lg '> <img className='rounded-xl  h-[250px] w-[200px]' src={require("../assets/insta 1 copy.jpg")} alt="" /> </div>
          <p className='text-white mt-4 flex justify-center'></p>
        </div>  <br />

      </div>
      <div>
        <div  >
          <div className=' w-[190px] rounded-lg  '> <img className='rounded-xl h-[250px] w-[200px] ' src={require("../assets/pena post copy.jpg")} alt="" /> </div>
          <p className='text-white mt-4 flex justify-center'></p>
        </div>  <br />

        <div  >
          <div className=' w-[190px] rounded-lg '> <img className='rounded-xl  h-[250px] w-[200px]' src={require("../assets/Momos copy.jpg")} alt="" /> </div>
          <p className='text-white mt-4 flex justify-center'></p>
        </div>  <br />

      </div>
      <div>
        <div  >
          <div className=' w-[190px] rounded-lg  '> <img className='rounded-xl h-[250px] w-[200px]' src={require("../assets/sho 1 copy.jpg")} alt="" /> </div>
          <p className='text-white mt-4 flex justify-center '></p>
        </div> <br />

        <div >
          <div className=' w-[190px]  rounded-lg '> <img className='rounded-xl h-[250px] w-[200px]' src={require("../assets/watch 1 copy.jpg")} alt="" /> </div>
          <p className='text-white mt-4 flex justify-center'  ></p>
        </div>

      </div>


    </div>

  )
}

export default CardDesign
