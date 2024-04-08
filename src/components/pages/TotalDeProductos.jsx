import React, {useEffect, useState} from 'react';


function TotalDeProductos(){

const [data, setData] = useState([]);

useEffect(()=>{
    fetch('http://localhost:3000/api/products')
    .then((response)=> response.json())
    .then((data)=> setData(data))
    .catch((error)=>console.log(error))
}, []);

    return(
        <div>
        <h2>Total de Productos en Digital Clothes: {data.countProduct}</h2> 
        </div>
    )
};

export default TotalDeProductos;