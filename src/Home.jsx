import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Sec_1 from './sec_1'
import Sec_2 from './Sec_2'
import Sec_3 from './Sec_3'
import TourData from "./data"
import Footer from './Footer'


function Home() {





    let [tours, settours] = useState([])
    let [modalopen, setmodelopen] = useState(false)

    let [obj, setobj] = useState({ name: "", person: "1", email: "", days: "3", price: 0 })
    let [arr, setArr] = useState([])






    
    function handle(e) {
        let { name, value } = e.target
        // console.log(name , value);
        setobj({ ...obj, [name]: value })
    }

    // function shw_modal() {
        //     setmodelopen(true)
        //     console.log(modalopen);
        // }
        
        
        
        function shw_modal(tour) {
            setmodelopen(true);
            setobj({ ...obj, price: tour.price_per_person * obj.person });
        }

        function onCancel() {
            setmodelopen(false)
            setobj({ name: "", person: "1", email: "", days: "3" })
        }
        
        function del(index) {
            let deltour = tours.filter((_, idx) => idx != index)
            settours(deltour)
        }
        
        function onok() {
            
            setArr([...arr, obj])
            localStorage.setItem("Booking", JSON.stringify( [...arr, obj] ))
            
        }
        useEffect(() => {
            settours(TourData)
    
        }, [])



    return (

        <>
            <Navbar />
            <Header />
            <Sec_1 />
            <Sec_2 />
            <Sec_3 tours={tours} del={del} shw_modal={shw_modal} modalopen={modalopen} onCancel={onCancel} obj={obj} handle={handle} onok={onok} />
            <Footer />

        </>

    )
}

export default Home
