import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { IoNavigate } from "react-icons/io5";
import avatar1 from "./img/avatar.jpeg"
import avatar2 from "./img/avatar3.jpeg"
import avatar3 from "./img/avatar4.png"


function Sec_1() {


  return (
    <div className=' w-full h-max flex justify-center items-center flex-wrap pb-8 shadow-xl sec_1'>
      <div className='w-full lg:w-1/2  h-max px-4 py-4'>
        <p className='text-xl text-gray-600 font-bold context'>JOIN US</p>
        <p className='text-xl text-gray-600 font-bold mt-2 context '>SHARE GREAT PLACES</p>
        <p className='text-xl text-gray-600 font-bold mt-2 context '>EXPLORE THE WORLD TOGETHER</p>
        <div className='w-full h-max  mt-6 flex justify-center lg:justify-start  items-center gap-20 context'>
          <div><h1 className='text-8xl blshadow'><b>85K</b></h1><p className='text-center text-gray-600 text-lg blshadow'>User Joined</p></div>
          <div><h1 className='text-8xl blshadow'><b>25K</b></h1><p className='text-center text-gray-600 text-lg blshadow'>Teams Created</p></div>
        </div>

        <div className=' w-max mx-auto lg:mx-0 flex justify-start items-center mt-6 gap-7'>
          <button className="customBtn">
            <span className="customBtn__iconContainer">
              <FaXTwitter className='text-white' />
            </span>
            <span className="customBtn__background bg-black"></span>
          </button>

          <button className="customBtn">
            <span className="customBtn__iconContainer">
              <FaFacebookF className='text-white text-2xl' />
            </span>
            <span className="customBtn__background bg-blue-700"></span>
          </button>

          <button className="customBtn">
            <span className="customBtn__iconContainer">
              <BsInstagram className='text-white text-2xl' />
            </span>
            <span className="customBtn__background bg-orange-700"></span>
          </button>

          <button className="customBtn">
            <span className="customBtn__iconContainer">
              <BsWhatsapp className='text-white text-2xl' />
            </span>
            <span className="customBtn__background bg-green-500"></span>
          </button>
        </div>
      </div>
      {/* ////////////////////// */}
      <div className='w-full lg:w-1/2 h-max py-4 px-8 flex justify-center items-center'>
        <div className='w-1/2 py-2 context'>
          <h1 className='font-bold text-xl '>Join Our Team</h1>
          
          <div className='w-[70%] shadow-xl px-2 lg:px-4 rounded-lg bg-gray-200 h-max py-4 mt-4  rt'>
            <p className='font-bold text-sm flex gap-6'>25 320 Team Member <IoNavigate /> </p>
            <p className='mt-4 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className='mt-3'>
              <div className="flex -space-x-4 rtl:space-x-reverse">
                <img className="w-8 ml-2 h-8 border-2 border-white rounded-full dark:border-gray-800" src={avatar1} alt="" />
                <img className="w-8 ml-2 h-8 border-2 border-white rounded-full dark:border-gray-800" src={avatar2} alt="" />
                <img className="w-8 ml-2 h-8 border-2 border-white rounded-full dark:border-gray-800" src={avatar3} alt="" />
                <a
                  href="#"
                  className="flex items-center justify-center w-8 ml-2 h-8 border-2  text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800"
                >
                  +99
                </a>
              </div>
            </div>
          </div>
        </div>


        <div className='w-1/2 py-2 pr-4'>
          <p className='text-sm font-bold context'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, adipisci quos aut consequuntur dolore soluta ex delectus esse autem ipsam.</p>
          <p className='text-sm font-bold context mt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, eaque?</p>
        </div>
      </div>
    </div>
  )
}

export default Sec_1