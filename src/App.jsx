import Login from "./acces/Login"
import Inicio from "./pages/Inicio"
import {  BrowserRouter as BrowserRouter, Router, Routes, Route , Outlet} from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Historial from "./pages/historial/Historial";
import Usuarios from "./pages/usuarios/Usuarios";
import Today from "./pages/today/Today";

function App() {   

  return (
    
    <BrowserRouter>
      <Routes>       

      <Route path='/' element={<Login/>}/>  
          <Route path='/inicio' element={<Inicio/>}>
            <Route path='/inicio/dashboard' element={<Dashboard/>}/>  
            <Route path='/inicio/historial' element={<Historial/>}/>   
            <Route path='/inicio/usuarios' element={<Usuarios/>}/>    
            <Route path='/inicio/today' element={<Today/>}/>  
          </Route>        
      </Routes>
    </BrowserRouter>
    
      
    
  )
}

export default App
