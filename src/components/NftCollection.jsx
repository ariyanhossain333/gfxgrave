import React from 'react'

const NftCollection = () => {
    return (
        <div >
            <button className=' ml-[580px] flex justify-center mt-7  border border-none outline-none px-8 py-[5px] bg-blue-700 text-white rounded-2xl text-[13px] '>More</button>

            <h2 className='text-white font-bold flex justify-center mt-7 text-[35px]'>NFTs collections</h2>


  

            <div className='flex justify-evenly mr-[120px]'>
                <div className='flex justify-evenly ml-[120px] mt-8 '>
                    <div className='h-[300px] w-[300px]  rounded-xl bg-indigo-800 ' >   
                        <div className='flex justify-between ' >
                            <div>
                                <img className='rounded-xl h-[300px] w-[200px]' src={require("../assets/I - 9 Collection (5).jpg")} alt="" />

                            </div>
                            <div>
                                <img className='rounded-xl  h-[90px] w-[85px]  ' src={require("../assets/I - 9 Collection (1).jpg")} alt="" />
                                <img className='rounded-xl  h-[90px] w-[85px] mt-3.5 ' src={require("../assets/I - 9 Collection (2).jpg")} alt="" />
                                <img className='rounded-xl  h-[90px] w-[85px] mt-3.5  ' src={require("../assets/I - 9 Collection (4).jpg")} alt="" />

                            </div>
                        </div>
                        {/* <p className='text-white mt-3 ml-3 text-[18px] '>NFTs Collection</p> */}
                    </div>

                </div>
                <div className='flex justify-evenly ml-[120px] mt-8 '>
                    <div className='h-[300px] w-[300px]  rounded-xl bg-indigo-800 ' >
                        <div className='flex justify-between ' >
                            <div>
                                <img className='rounded-xl h-[300px] w-[200px]' src={require("../assets/I - 9 Collection (6).jpg")} alt="" />

                            </div>
                            <div>
                                <img className='rounded-xl h-[90px] w-[85px] ' src={require("../assets/I - 9 Collection (7).jpg")} alt="" />
                                <img className='rounded-xl h-[90px] w-[85px] mt-3.5  ' src={require("../assets/I - 9 Collection (8).jpg")} alt="" />
                                <img className='rounded-xl h-[90px] w-[85px] mt-3.5 ' src={require("../assets/I - 9 Collection (9).jpg")} alt="" />

                            </div>


                        </div>
                        {/* <p className='text-white mt-3 ml-3 text-[18px]'>NFTs Collection</p> */}
                    </div>

                </div>
            </div>



            <button className=' ml-[580px] flex justify-center mt-7  border border-none outline-none px-8 py-[5px] bg-blue-700 text-white rounded-2xl text-[13px] mb-6 '>More</button>
        </div>
    )
}

export default NftCollection
