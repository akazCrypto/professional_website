import React from 'react'
import bitcoin from './images/icons8-bitcoin-48.png'
import blockchain from './images/icons8-blockchain-grid-64.png'
import ethereum from './images/icons8-ethereum-64.png'
import polygon from './images/icons8-polygon-64.png'
import chainlink from './images/icons8-chainlink-64.png'
import link from './images/icons8-link-16.png'
import stacking from './images/icons8-stacking-50.png'
import smart_contract from './images/icons8-smart-contracts-68.png'




const Skills = () => {
    return (
        <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Experience</p>
                    <p className=' py-4'>These are companies i have worked with</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={bitcoin} alt="HTML icon" />
                        <p className='my-4'>Bitcoin</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={blockchain} alt="HTML icon" />
                        <p className='my-4'>Blockchain</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={polygon} alt="HTML icon" />
                        <p className='my-4'>Polygon</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={ethereum} alt="HTML icon" />
                        <p className='my-4'>Ethereum</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={chainlink} alt="HTML icon" />
                        <p className='my-4'>Chainlink</p>
                    </div>                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={link} alt="HTML icon" />
                        <p className='my-4'>Link</p>
                    </div>                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={stacking} alt="HTML icon" />
                        <p className='my-4'>Stacking</p>
                    </div>                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={smart_contract} alt="HTML icon" />
                        <p className='my-4'>Smart contract</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Skills
