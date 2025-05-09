import React from 'react'
import Modalbeach from './Modal_2'


function Sec_2() {
    return (
        <div className='w-full bg-gray-100 py-2 h-max flex justify-center items-center flex-wrap-reverse'>
            <div className='w-full lg:w-1/2 px-8 context'>
                <h1 className='text-3xl text-center md:text-start lg:text-5xl font-bold'>Make This Summer Unforgettable!</h1>
                <p className='mt-6 text-gray-700 text-lg text-center md:text-start tracking-[1px]'>Grab exclusive summer holiday deals and explore breathtaking destinations at unbeatable prices. Limited-time offer — book now and let the adventure begin!</p>
            </div>
            <div className='w-full lg:w-1/2 h-[60vh]'> <Modalbeach/> </div>
        </div>
    )
}

export default Sec_2