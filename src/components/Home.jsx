import React from 'react';
import {Link} from 'react-router-dom';

function Home(){
    return(
        <div className='Home'>
             
       <h2> <Link to="/totalCategorias" >Categorias</Link> <br /></h2>
       <h2> <Link to="/totalUsuarios">Total de usuarios</Link><br /></h2>
       <h2> <Link to="/totalProductos">Total de productos</Link><br /></h2>
       <h2> <Link to="/ultimoUsuario">Ultimo usuario creado</Link><br /></h2>
       <h2> <Link to="/categorias">Categorias</Link><br /></h2>
       <h2> <Link to="/listaProductos">Lista de productos</Link><br /></h2>

        </div>
    )
}
export default Home