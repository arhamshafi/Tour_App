import React, { useEffect, useState } from 'react'
import Home from './Home'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Loader from './Loader'
import List from './List'
function App() {
  let [isloading, setisloading] = useState(true)

  useEffect(() => {
    setTimeout(() => {

      setisloading(false)

    }, 2000);

    // return () => clearTimeout(timer);
  }, [])


  if (isloading) {
    return (<Loader />)
  }

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} ></Route>
           <Route path='/List' element={<List />} ></Route> 
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App