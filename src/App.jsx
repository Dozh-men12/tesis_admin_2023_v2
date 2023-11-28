import Login from "./acces/Login"
import Inicio from "./pages/Inicio"
import {  BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {  

  return (
    <>
    <Routes>
      {/* <Route path='/' index element={<Login/>}/> */}
      <Route path="/inicio-admin" element={<Inicio/>}></Route>
      {/* <Route path='/inicio-admin/dashboard' element={<Dashboard/>}></Route>
      <Route path='/inicio-admin/historial' element={<Historial/>}></Route>
      <Route path='/inicio-admin/usuarios' element={<Users/>}></Route> */}
    </Routes>
      
    </>
  )
}

export default App
