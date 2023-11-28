import {RxDashboard} from "react-icons/rx";
import { FaUsers } from "react-icons/fa";
import { GrHistory } from "react-icons/gr";
import { IoIosArrowForward } from "react-icons/io";

export const navbarData = [
    {   
        icono:<RxDashboard size={20}/>,
        texto:"Dashboard",
        URL:"/dashboard"
    },
    {
        icono:<GrHistory size={20}/>,
        texto:"Historial",
        URL:"/inicio-admin/historial"
    },
    { 
        icono:<FaUsers size={20}/>,
        texto:"Usuarios",
        URL:"/inicio-admin/usuarios"
    },
]

