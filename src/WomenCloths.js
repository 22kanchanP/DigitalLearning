import { useEffect, useState } from "react"

import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol,
    MDBBtn
  } from 'mdb-react-ui-kit';
import Footer from "./Footer";

import { useNavigate } from "react-router-dom";

function WomenCloths()
{
    const [apidata,setApiData] = useState([])
    const navi = useNavigate()

    useEffect(()=>{
        getData()
    },[])

    function hello(pid)
    {
        const data = {proid : pid}
        navi("./item" , {state : data} )
    }

    async function getData()
    {
        var result = await fetch("https://fakestoreapi.com/products/category/women's%20clothing")
       // console.log(result) //result string format me aayega.isko json me convert krna hoga.

        var data = await result.json()
        //console.log(data)

        setApiData(data)

       
    }
    console.log(apidata)
    return(
        <div>
        
            <MDBRow className='row-cols-1 row-cols-md-3 g-4'>

                {
                    apidata.map((item)=>

                   <MDBCol>
                        <MDBCard>
                        <center><MDBCardImage
                            src= {item.image} style = {{width : "100px" , height : "150px"}}
                            alt='...'
                            position='top'
                        /></center>
                        <MDBCardBody>
                            <MDBCardTitle>{item.title}</MDBCardTitle>
                            <MDBCardTitle style = {{color : "red"}}>{item.price*80} Rs</MDBCardTitle>
                            <MDBCardTitle style = {{color : "green"}}>{item.category}</MDBCardTitle>
                            <MDBCardTitle style = {{color : "blue"}}>{item.rating.rate}</MDBCardTitle>
                            <MDBCardTitle style = {{color : "green"}}>{item.rating.count}</MDBCardTitle>
                            <MDBCardText>
                           {item.description}
                            </MDBCardText>

                            <MDBBtn onClick={()=>hello(item.id)}> View details {item.id}</MDBBtn>
                        </MDBCardBody>
                        </MDBCard>
                    </MDBCol>)
                }
      
             </MDBRow>

             <Footer></Footer>


        </div>
    )
}

export default WomenCloths