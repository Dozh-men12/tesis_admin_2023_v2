import {RxDashboard} from "react-icons/rx";
import { FaUsers } from "react-icons/fa";
import { GrHistory } from "react-icons/gr";
import { MdToday } from "react-icons/md";

export const navbarData = [
    {   
        icono:<RxDashboard size={20}/>,
        texto:"Dashboard",
        URL:"/inicio/dashboard"
    },    
    { 
        icono:<MdToday size={20}/>,
        texto:"Hoy",
        URL:"/inicio/today"
    },   
    { 
        icono:<FaUsers size={20}/>,
        texto:"Usuarios",
        URL:"/inicio/usuarios"
    },
    {
        icono:<GrHistory size={20}/>,
        texto:"Historial",
        URL:"/inicio/historial"
    },
    
]

