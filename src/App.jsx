import Login from "./acces/Login"
import Inicio from "./pages/Inicio"
import {  BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {  

  return (
    <>
    <Routes>
      {/* <Route path='/' index element={<Login/>}/> */}
      <Route path='/' element={<Inicio/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      {/* <Route path='/inicio-admin/dashboard' element={<Dashboard/>}></Route>
      <Route path='/inicio-admin/historial' element={<Historial/>}></Route>
      <Route path='/inicio-admin/usuarios' element={<Users/>}></Route> */}
    </Routes>
      
    </>
  )
}

export default App
