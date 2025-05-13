import React from 'react'

function Loader() {
    return (
        <div className='w-full h-screen flex justify-center items-center bg-purple-200 flex-col'>


            <div className="loader">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </div>
            <h1 className='font-bold cursor-pointer'>LOADING...</h1>
            
        </div>
    )
}

export default Loader