/*import { useState } from 'react';*/
import {Route, Routes, Link} from 'react-router-dom';
import TotalDeCategorias from './components/pages/TotalDeCategorias';
import TotalDeProductos from './components/pages/TotalDeProductos';
import TotalDeUsuarios from './components/pages/TotalDeUsuarios';
import UltimoUsuario from './components/pages/UltimoUsuario';
import Categorias from './components/pages/Categorias';
import ListaProductos from './components/pages/ListaProductos';
import Home from './components/Home'
import './App.css'

function App() {
  /*const [count, setCount] = useState(0)*/
 return (
    <div className="App" >
  
<Home />

<Routes>
    <Route path='/totalCategorias' element={<TotalDeCategorias/>}></Route>
    <Route path='/totalUsuarios' element={<TotalDeUsuarios/>}></Route>
    <Route path='/totalProductos' element={<TotalDeProductos/>}></Route>
    <Route path='/ultimoUsuario' element={<UltimoUsuario/>}></Route>
    <Route path='/categorias' element={<Categorias/>}></Route>
    <Route path='/listaProductos' element={<ListaProductos/>}></Route>
  </Routes> 

    </div>
  )
}

export default App
