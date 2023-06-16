import React, { useEffect } from 'react'
import { useContext } from 'react';
import noteContext from '../context/dataContext';
const Home = () => {
    const context = useContext(noteContext);
   const {centers,setCenters,fetchallcenters,applyforslot} = context;
    useEffect(()=>{
        console.log("hello");
        fetchallcenters();
    },[])
  return (
    <>

    <h1 className='container'>Vaccination Centers</h1>
      {
        centers.map((center)=>{
            return <>
            <div style={{'display':'block','margin':'auto','width':'80vw','backgroundColor':'lightgray','border':'2px solid black','borderRadius':'10px','padding':'10px'}}className="card-body" key={center._id}>
                    <h3 className="card-title">Center Name: {center.name}</h3>
                    <h2 className="card-text">Center Place:{center.place}</h2>
                    <h2 className="card-text">Dosage Availabe:{center.dosage}</h2>
                    <button style={{"cursor":"pointer"}}  onClick={()=>{applyforslot(centers._id)}}>Apply for slot</button>
                </div>
                <br></br>
            </>
        })
      }
    </>
  )
}

export default Home

