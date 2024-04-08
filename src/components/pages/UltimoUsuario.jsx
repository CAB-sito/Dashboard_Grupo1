import React, {useEffect, useState} from 'react';


function UltimoUsuario(){
 
const [data, setData] = useState([]);




useEffect(()=>{
    fetch('http://localhost:3000/api/users')
    .then((response)=> response.json())
    .then((data)=>{
        setData(data.users[data.cont-1])
    })
    .catch((error)=>console.log(error))
}, []);

console.log(data)


    return(
        <div>
          
        <h2>Usuario Numero: {data.id}</h2>
        <h3>Nombre: {data.name}</h3>
        <h3>Email: {data.email}</h3>

        </div>
    )
};

export default UltimoUsuario