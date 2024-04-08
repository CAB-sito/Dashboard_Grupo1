import React, {useEffect, useState} from 'react';


function Categorias(){

const [data, setData] = useState([]);

useEffect(()=>{
    fetch('http://localhost:3000/api/products')
    .then((response)=> response.json())
    .then((data)=> setData(data.countByCategory))
    .catch((error)=>console.log(error))
}, []);

    return(
        <div>
            <h2>Total de Productos de categoria normal: {data.normal} </h2>
            <h2>Total de Productos de categoria oferta: {data.oferta} </h2> 
        </div>
    )
};

export default Categorias;