import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaWhatsapp } from "react-icons/fa6";

function Footer() {
  return (
    <div className='footer w-full py-2 flex justify-center items-center py-16 relative flex-wrap'>
      <div className='w-[100%] lg:w-[55%] h-max px-12'>
        <h1 className='text-white font-bold text-6xl context tsh'>Footer</h1>
        <ul className="text-white mt-8 list-disc ml-5">
          <li className="mt-2 tsh">Your companion in discovering top international destinations</li>
          <li className="mt-2 tsh">© 2025 YourTravel Inc. All international rights reserved.</li>

        </ul>
        <div className='w-1/2 mt-4'>
          <div className="social-login-icons">
            <div className="socialcontainer">
              <div className="icon social-icon-1-1">
                <svg
                  viewBox="0 0 512 512"
                  height="1.7em"
                  xmlns="http://www.w3.org/2000/svg"
                  className="svgIcontwit"
                  fill="white"
                >
                  <path
                    d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
                  ></path>
                </svg>
              </div>
              <div className="social-icon-1">
                <svg
                  viewBox="0 0 512 512"
                  height="1.7em"
                  xmlns="http://www.w3.org/2000/svg"
                  className="svgIcontwit"
                  fill="white"
                >
                  <path
                    d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="socialcontainer">
              <div className="icon social-icon-2-2">
                <svg
                  fill="white"
                  className="svgIcon"
                  viewBox="0 0 448 512"
                  height="1.5em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                  ></path>
                </svg>
              </div>
              <div className="social-icon-2">
                <svg
                  fill="white"
                  className="svgIcon"
                  viewBox="0 0 448 512"
                  height="1.5em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="socialcontainer">
              <div className="icon social-icon-3-3">
                <svg
                  viewBox="0 0 384 512"
                  fill="white"
                  height="1.6em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"
                  ></path>
                </svg>
              </div>
              <div className="social-icon-3">
                <svg
                  viewBox="0 0 384 512"
                  fill="white"
                  height="1.6em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="socialcontainer">
              <div className="icon social-icon-4-4">
              <FaWhatsapp style={{color:"white" , fontSize:"25px"}} />
              </div>
              <div className="social-icon-4">
              <FaWhatsapp style={{color:"white" , fontSize:"25px"}}/>
              </div>
            </div>
          </div>

        </div>

      </div>
      <div className='w-[100%] lg:w-[45%] mt-12 lg:mt-0 h-max '>

        <h1 className='text-white font-bold text-4xl tsh text-center'>LIMITED OFFER</h1>

        <div className='flex justify-center gap-4 items-center  mt-8'>
          <button className="custom-button">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#ffffff">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <title>github</title>
                <rect width="24" height="24" fill="none"></rect>
                <path
                  d="M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z"
                ></path>
              </g>
            </svg>
            Continue with Github
          </button>
          <button className="custom-button">
          <FcGoogle />
            Continue with Google
          </button>
        </div>
        <h1 className='text-4xl text-white font-bold text-center tsh mt-12'>JOIN IT FAST</h1>
      </div>

    </div>
  )
}

export default Footer