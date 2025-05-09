import React from 'react'
import ModelViewer from './Modal'

function Header() {
    return (
        <>
            <div className='header context w-full h-[55vh]  sm:h-[110vh] md:h-[70vh] xl:h-[90vh] relative'>
                <div className='w-full h-full bg-black opacity-25'></div>
                <div className='w-full py-4 absolute z-10 top-20 px-18 flex items-center'>
                    <div>
                        <h1 className='h_h1_anime tsh w-[100%] md:w-[80%]  mt-6 lg:mt-0 mx-auto md:mx-0 tracking-[2px] text-white text-3xl sm:text-5xl  lg:text-6xl xl:text-8xl font-bold leading-tight text-center md:text-start'>Travel & Discover With Intellit</h1>
                        <p className='h_h2_anime text-white text-md w-full md:w-3/4 mx-auto md:mx-0 lg:w-2/4 tsh mt-6 lg:mt-0 text-center md:text-start'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore vero, quos molestias non distinctio cupiditate voluptatibus at id tempore ducimus!</p>
                        <div className='w-[80%] hidden sm:block  md:hidden mx-auto context'><ModelViewer /></div>
                        <div className='mx-auto md:m-0 w-max'>
                            <button className="h-btn g_btn mt-8 lg:mt-4 "><i className="animation"></i><b>Get Started</b><i className="animation"></i>
                            </button>
                        </div>
                    </div>
                    <div className='w-[50px] h-[50px] absolute bottom-[-20%] left-[49%] hidden md:block flex justify-center items-center'>

                        <div className="h-anim  ">
                            <span className="bar"></span>
                            <span className="bar"></span>
                            <span className="bar"></span>
                        </div>


                    </div>
                </div>
                <div className='mdl w-[30%] absolute z-10 top-20 right-0 hidden md:block context'><ModelViewer /></div>
            </div>

        </>
    )
}

export default Header





