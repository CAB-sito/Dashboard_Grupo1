import React, {useEffect, useState} from 'react';

function TotalDeUsuarios(){
 
const [data, setData] = useState([]);

useEffect(()=>{
    fetch('http://localhost:3000/api/users')
    .then((response)=> response.json())
    .then((data)=> setData(data))
    .catch((error)=>console.log(error))
}, []);

    return(
        <div>
          
                <h2>Total de Usuarios registrados en Digital Clothes: {data.cont}</h2>

        </div>
    )
};

export default TotalDeUsuarios