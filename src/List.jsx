import React, { useEffect, useState } from 'react'

import Loader from './Loader';


function List() {

  const [isLoading, setIsLoading] = useState(true);

  let [list, setlist] = useState(
    localStorage.getItem("Booking") ? JSON.parse(localStorage.getItem("Booking")) : []
  )


  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);

  }, []);

  if (isLoading) {
    return <Loader />;
  }


  let country = ["United Kingdom", "United State", "Japan", "Italy", "France", "Turkey"]



  return (
    <>
      <div className='flex justify-start items-center gap-4 px-4'>
        {
          list.map((ele) => {
            return (
              <>
                <div className="max-w-sm w-full bg-gray-900 text-white rounded-2xl mt-4  shadow-lg p-6 border border-yellow-400">
                  <h2 className="text-2xl font-bold mb-2 text-yellow-300">{ele.name}</h2>
                  <p className="text-sm text-gray-300 mb-4">{ele.email}</p>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Days:</span>
                      <span className="text-white font-medium">{ele.days}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Persons:</span>
                      <span className="text-white font-medium">{ele.person}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Total Price:</span>
                      <span className="text-yellow-300 font-semibold">Rs {ele.price}</span>
                    </div>
                  </div>
                </div>
              </>
            )
          })
        }
      </div>
      
      <p style={{ position:"absolute" , bottom:"2%" , left:"40%"}}><b style={{ color: "black" ,}}>code by : </b><span className='text-purple-700 underline'>Muhammad Arham Shafi Butt</span></p>

    </>
  )
}

export default List