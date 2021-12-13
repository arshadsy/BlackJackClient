import React from 'react'
import { MDBBtn } from "mdbreact";

function PlayButtons() {
    const hit=(e)=>{
        e.preventDefault();
console.log(e.target)
    }
    const stand=(e)=>{
        e.preventDefault();
console.log(e.target)
    }
    const doubleBet=(e)=>{
        e.preventDefault();
console.log(e.target)
    }
    return (
        <div>
            <MDBBtn onClick={(e) => hit(e)} color="info" >
                Hit
            </MDBBtn>
            <MDBBtn onClick={(e) => stand(e)} color="success" >
                Stand
            </MDBBtn>
            <MDBBtn onClick={(e) => doubleBet(e)} color="warning" >
                Double Stand
            </MDBBtn>
        </div>
    )
}

export default PlayButtons
