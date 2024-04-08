import React, {useEffect, useState} from 'react';


function ListaProductos(){

const [data, setData] = useState([]);

useEffect(()=>{
    fetch('http://localhost:3000/api/products')
    .then((response)=> response.json())
    .then((data)=> setData(data.products))
    .catch((error)=>console.log(error))
}, []);

    return(
        <div> 
        <ul>
            {
                data.map((product, i)=>{
                    return <li key ={i}>{product.name}</li>
                })
            }
        </ul>
        </div>
    )
};

export default ListaProductos;