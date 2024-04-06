import { useEffect, useState } from "react"
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol
  } from 'mdb-react-ui-kit';
import Footer from "./Footer";

function Home()
{
    const [apidata,setApiData] = useState([])

    useEffect(()=>{
        getData()
    },[])

    async function getData()
    {
        var result = await fetch("https://fakestoreapi.com/products")
       // console.log(result) //result string format me aayega.isko json me convert krna hoga.

        var data = await result.json()
        //console.log(data)

        setApiData(data)

       
    }
    console.log(apidata)
    return(
        <div>
            {/* <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <center><h1> Home Page</h1></center> */}
            {/* //koi function promise return krega kaise check kr skte hai ?  */}

            {/* What is Promise ? Promise :- .....jb bhi kisi libraryko install kro to server ko restart kro */}
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
                        </MDBCardBody>
                        </MDBCard>
                    </MDBCol>)
                }
      
             </MDBRow>


             <Footer></Footer>



        </div>
    )
}

export default Home