import React, { useEffect, useState } from 'react'
import {Card} from "react-bootstrap"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Covid =()=>{

  const notify = ()=>toast(" Live Covid App")
  const [data,setData] = useState([]);
     const getCovidData = async()=>{
         try{
             const res = await fetch('https://data.covid19india.org/data.json');
             const Api_Data = await res.json();


             console.log(Api_Data.statewise[0]);
             setData(Api_Data.statewise[0])
         }
         catch(err)
         {
             console.log(err);

         }
     }



    useEffect(()=>{
        getCovidData();

    },[])



    return(
        <>
        <div className='bg-primary container text-center text-white mt-5'>
          <button onClick={notify} className = "mt-3">Covid App</button>
          <ToastContainer/>
         <h3 className='mt-5'>Covid-19 CoronaVirus Tracker </h3>
         </div>
        <div className='container mt-5'>
            <div className='row'>
              <div className='col-sm'>
              <Card style={{ width: '18rem' }}>
        <Card.Body className  = "bg-primary">
          <Card.Title className='text-white'><span className='text-white fw-bold fs-6'>OUR </span><span className='text-white fs-3'>COUNTRY</span>  </Card.Title>
          <Card.Text className='text-white fw-bold fs-1'>
            PAKISTAN
          </Card.Text>
        </Card.Body>
      </Card>
              </div>
              <div className='col-sm'>
              <Card style={{ width: '18rem' }}>
        <Card.Body className  = "bg-info">
          <Card.Title className='text-white'><span className='text-white fw-bold fs-6'>TOTAL </span><span className='text-white fs-3'>RECOVERD</span> </Card.Title>
          <Card.Text className='text-white fw-bold fs-1'>
            {data.recovered}
            
          </Card.Text>
        </Card.Body>
      </Card>
              </div>
              <div className='col-sm'>
              <Card style={{ width: '18rem' }}>
        <Card.Body className  = "bg-success">
          <Card.Title className='text-white'><span className='text-white fw-bold fs-6'>TOTAL</span> <span className='text-white fs-3'>CONFIRMED</span> </Card.Title>
          <Card.Text className='text-white fw-bold fs-1'>
            {data.confirmed}
          </Card.Text>
        </Card.Body>
      </Card>
              </div>



            </div>
        </div>
        


        <div className='container mt-5'>
            <div className='row'>
              <div className='col-sm'>
              <Card style={{ width: '18rem' }}>
        <Card.Body className  = "bg-primary">
          <Card.Title className='text-white'><span className='text-white fw-bold fs-6'>TOTAL </span><span className='text-white fs-3'>DEATH</span></Card.Title>
          <Card.Text className='text-white fw-bold fs-1'>
         {data.deaths}
          </Card.Text>
        </Card.Body>
      </Card>
              </div>
              <div className='col-sm'>
              <Card style={{ width: '18rem' }}>
        <Card.Body className  = "bg-info">
          <Card.Title className='text-white'><span className='text-white fw-bold fs-6'>TOTAL </span> <span className='text-white fs-3'> ACTIVE</span></Card.Title>
          <Card.Text className='text-white fw-bold fs-1'>
            {data.active}
          </Card.Text>
        </Card.Body>
      </Card>
              </div>
              <div className='col-sm'>
              <Card style={{ width: '18rem' }}>
        <Card.Body className  = "bg-success">
          <Card.Title className='text-white'><span className='text-white fw-bold fs-6'>LAST</span><span className='text-white fs-3'> UPDATE</span></Card.Title>
          <Card.Text className='text-white fw-bold fs-1'>
            {data.lastupdatedtime}
          </Card.Text>
        </Card.Body>
      </Card>
              </div>



            </div>
        </div>
        
      
         
     
      </>
      


      
    )
}
export default Covid