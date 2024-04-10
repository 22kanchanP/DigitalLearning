import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"

import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBRipple
  } from 'mdb-react-ui-kit';

function Item()
{

    const location = useLocation();
    const data = location.state

    const [apidata , setApiData] = useState({})

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products/" + data.name).then((result) =>{

        // console.log(result) //ki hmne sahi link hit mari hai..

        result.json().then((data1) =>{
            // console.log(data1)// successfully data ki id console pe print ho rhi

            setApiData(data1)

        })

        })
    },[])
    return(
        <div>
            {/* Item
            <h1> {data.name}</h1>
            <h1> {data.add}</h1> */}

            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <MDBCard>
                <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                    <center>  <MDBCardImage src= {apidata.image} style = {{width : "100px" , height : "150px"}} fluid alt='...' /></center>
                    <a>
                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)'}}></div>
                    </a>
                </MDBRipple>
                <MDBCardBody>
              <center>  <MDBCardTitle>{apidata.title}</MDBCardTitle>
                            <MDBCardTitle style = {{color : "red"}}>{apidata.price*80} Rs</MDBCardTitle>
                            <MDBCardTitle style = {{color : "green"}}>{apidata.category}</MDBCardTitle>
                           
                            
                            <MDBCardText>
                           {apidata.description}
                            </MDBCardText></center>
                    <center><MDBBtn href='#'>Add to cart</MDBBtn>
                    <MDBBtn href='#'>Back</MDBBtn></center>
                </MDBCardBody>
                </MDBCard>  
        </div>
    )
}

export default Item