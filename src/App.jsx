/*import { useState } from 'react';*/
import {Route, Link} from 'react-router-dom';
import TotalDeCategorias from './components/TotalDeCategorias';
import TotalDeProductos from './components/TotalDeProductos';
import TotalDeUsuarios from './components/TotalDeUsuarios';
import './App.css'

function App() {
  /*const [count, setCount] = useState(0)*/

  return (
    <div>
    <Route path='/totalCategorias' component={TotalDeCategorias}></Route>
    <Route path='/totalUsuarios' component={TotalDeUsuarios}></Route>
    <Route path='/totalProductos' component={TotalDeProductos}></Route>

    <Link to="/totalCategorias">Categorias</Link> <br />
    <Link to="/totalUsuarios">Total de usuarios</Link><br />
    <Link to="/totalProductos">Total de productos</Link><br />
    </div>
  )
}

export default App
