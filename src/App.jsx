import Login from "./acces/Login"
import Inicio from "./pages/Inicio"
import {  BrowserRouter as BrowserRouter, Router, Routes, Route , Outlet} from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Historial from "./pages/historial/Historial";
import Usuarios from "./pages/usuarios/Usuarios";

function App() {   

  return (
    
    <BrowserRouter>
      <Routes>       
          <Route path='/'  element={<Inicio/>}>
            <Route path='/dashboard' element={<Dashboard/>}/>  
            <Route path='/historial' element={<Historial/>}/>   
            <Route path='/usuarios' element={<Usuarios/>}/>    
          </Route>        
      </Routes>
    </BrowserRouter>
    
      
    
  )
}

export default App
