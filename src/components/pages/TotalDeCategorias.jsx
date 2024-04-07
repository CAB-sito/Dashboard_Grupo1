import React, {useEffect, useState} from 'react';

function TotalDeCategorias(){

const [data, setData] = useState([]);

useEffect(()=>{
    fetch('http://localhost:3000/api/products')
    .then((response)=> response.json())
    .then((data)=> setData(data))
    .catch((error)=>console.log(error))
}, []);

    return(
        <div>
        <h2>Total de Categorias en Digital Clothes: </h2> 
        </div>
    )


}
export default TotalDeCategorias


