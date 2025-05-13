import React, { useEffect, useState } from 'react'
import { Modal } from 'antd';
import { Link } from 'react-router-dom';


function Sec_3({ tours, del, shw_modal, modalopen, onCancel, obj, handle, onok }) {

    let [selcted_tour, setselcted_tour] = useState(null)


    useEffect(() => {
        if (selcted_tour) {
            const updatedPrice = selcted_tour.price_per_person * obj.person;
            handle({ target: { name: 'price', value: updatedPrice } });
        }
    }, [obj.person]);
    // 
    // console.log(selcted_tour);


    return (
        <div className='w-full py-2 context pb-20 h-max'>
            <h1 className='text-4xl font-bold text-center mt-12'>Unforgettable Trips, Just a Click Away</h1>
            <p className='text-gray-700 w-3/4 mx-auto mt-8 text-center text-md'>Embark on a journey like never before with our exclusive tour packages tailored for every kind of traveler. Whether you’re seeking serene beaches, adventurous mountains, or vibrant cityscapes, we’ve got something special for you. Discover handpicked destinations, comfortable accommodations, and unbeatable rates — all in one place. Your dream getaway is just a click away.</p>
            <div className='w-[90%] h-max mx-auto mt-20'>

                {
                    tours.map((ele, idx) => {
                        return (
                            <div key={idx} className='w-full flex justify-between items-center mt-12 dta flex-wrap s3_main'>
                                <div className='w-[100%] lg:w-[42%] h-[35vh] sm:h-[45vh] md:h-[50vh] lg:h-[45vh] bxsh rounded-xl'><div className='w-full h-full overflow-hidden rounded-xl'><img className='s3_img rounded-xl' src={ele.image} alt="" /> </div></div>
                                <div className='w-[100%] lg:w-[55%] h-max flex flex-col justify-center gap-4 context  '>
                                    <p className='text-2xl text-purple-700  mt-8 lg:mt-0 text-center md:text-start'>Explore This Iconic Place: <b className='text-black'>{ele.country}</b></p>
                                    <h1 className='text-lg font-bold text-center md:text-start'>Some Special Reviews About This Place...</h1>
                                    <p className='text-lg text-gray-600 text-center md:text-start'>{ele.info}</p>
                                    <div className='flex justify-start items-center mx-auto md:mx-0'>

                                        <button className="bookbtn cursor-pointer" onClick={() => { shw_modal(ele); setselcted_tour(ele) }}>
                                            <span className="icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" fill="currentColor" className="bi bi-airplane-fill" viewBox="0 0 16 16">
                                                    <path d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849Z"></path>
                                                </svg>
                                            </span>
                                            <span className="text ">Book Now</span>
                                        </button>
                                        {/* ////////////// */}
                                        <button aria-label="Delete item" className="delete-button" onClick={() => del(idx)}>
                                            <svg
                                                className="trash-svg"
                                                viewBox="0 -10 64 74"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g id="trash-can">
                                                    <rect
                                                        x="16"
                                                        y="24"
                                                        width="32"
                                                        height="30"
                                                        rx="3"
                                                        ry="3"
                                                        fill="#e74c3c"
                                                    ></rect>

                                                    <g transformOrigin="12 18" id="lid-group">
                                                        <rect
                                                            x="12"
                                                            y="12"
                                                            width="40"
                                                            height="6"
                                                            rx="2"
                                                            ry="2"
                                                            fill="#c0392b"
                                                        ></rect>
                                                        <rect
                                                            x="26"
                                                            y="8"
                                                            width="12"
                                                            height="4"
                                                            rx="2"
                                                            ry="2"
                                                            fill="#c0392b"
                                                        ></rect>
                                                    </g>
                                                </g>
                                            </svg>
                                        </button>
                                        {/* ////////////////// */}

                                        <Link to="/List">
                                            <label className="ui-bookmark">
                                                <input type="checkbox" />
                                                <div className="bookmark">
                                                    <svg viewBox="0 0 32 32">
                                                        <g>
                                                            <path d="M27 4v27a1 1 0 0 1-1.625.781L16 24.281l-9.375 7.5A1 1 0 0 1 5 31V4a4 4 0 0 1 4-4h14a4 4 0 0 1 4 4z"></path>
                                                        </g>
                                                    </svg>
                                                </div>
                                            </label>
                                        </Link>

                                    </div>
                                </div>

                                { }
                                <Modal className="model" open={modalopen} onCancel={onCancel} onOk={() => { onok(), onCancel() }} okButtonProps={{ style: { backgroundColor: 'purple', borderColor: 'purple', color: 'white', } }} cancelButtonProps={{ className: "custom-cancel-btn" }}>

                                    <div className=' mx-auto w-[90%] context'>
                                        <h1 className='font-bold text-2xl text-center'>Tour Registration Form</h1>
                                        <div className="inputGroup mt-4">
                                            <input type="text" required autoComplete="off" name="name" onChange={handle} value={obj.name} />
                                            <label htmlFor="name">N a m e</label>
                                        </div>
                                        <div className="inputGroup mt-4">
                                            <input type="text" required autoComplete="off" name="email" onChange={handle} value={obj.email} />
                                            <label htmlFor="name">E - m a i l</label>
                                        </div>
                                        <div className="inputGroup mt-4">
                                            <input type="number" required autoComplete="off" min="1" max="6" name="person" onChange={handle} value={obj.person} />
                                            <label htmlFor="name">P e r s o n s</label>
                                        </div>
                                        <div className="inputGroup mt-4">
                                            <input type="number" required autoComplete="off" name="days" max="30" min="3" onChange={handle} value={obj.days} />
                                            <label htmlFor="name">D a y s ( you wanna stay )</label>
                                        </div>

                                        {
                                            selcted_tour && (

                                                <div className='des w-[90] mx-auto mt-2 rounded-xl bg-[whitesmoke] py-4 px-4'>
                                                    <p className='text-lg'>Country Name : <b>{selcted_tour.country}</b></p>
                                                    <p className='text-lg mt-2'>Place Where We Visit : <b className='text-purple-800'>{selcted_tour.place}</b> </p>
                                                    <p className='text-lg mt-2'>Price : <b className='text-green-400'>${selcted_tour.price_per_person * obj.person}</b></p>
                                                </div>

                                            )
                                        }

                                    </div>

                                </Modal>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Sec_3


