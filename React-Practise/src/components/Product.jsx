import React from "react"
import { useParams } from "react-router-dom"
function Product(){
    const {name}=useParams();
    return(
        <>
           <h2>{name}</h2>
        </>
    )
}
export default Product;