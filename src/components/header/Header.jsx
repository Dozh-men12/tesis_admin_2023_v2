import Navbar from "../navbar/Navbar";
import { GoSearch } from "react-icons/go";
import { BiMoon, BiSolidMoon} from "react-icons/bi";
import { useState } from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";
import { useFetcher } from "react-router-dom";
import { useEffect } from "react";

const Header = () =>{
    const [icon, setIcon] = useState(false)
    /* const [theme ,  setTheme] = useState(()=>{

        if(window.matchMedia("(prefers-color-scheme: dark)").matches) {
            return "dark";
        }
        return "light"
    })
    
    useEffect(()=>{
        if (theme === "dark"){
            document.querySelector('html').classList.add('dark')
        }else{
            document.querySelector('html').classList.remove('dark')
        }

    }, [theme])

    const handleIcon = () =>{
        setIcon(!icon),
        setTheme(prevTheme => prevTheme === "light" ? "dark" : "light")
    } */
    
    return(
        <section className="w-screen max-h-[69px] bg-black mx-6 left-[250px] mt-7">


        
        </section>
    );

};

export default  Header;

{/* <div className="bg-slate-50 flex h-screen max-h-[70px]  dark:bg-slate-700 w-[100%] rounded-md flex-row justify-between absolute mx-9 mt-8 ">
            <div className="hover:bg-slate-300 focus-visible:bg-slate-300 h-[38px] my-auto w-[350px] flex rounded-full mx-[20px] dark:bg-slate-800 dark:text-white">
                <div className=" flex items-center justify-center ml-[20px] mr-[4px]">
                    <GoSearch size={22}/>
                    <input type="text"  className="shadow-none mx-[10px]  bg-none border-none bg-transparent focus:outline-none focus:ring-0" placeholder="Buscar" />
                </div>                
            </div >
            <div className= "flex my-auto mx-[20px] gap-6 text-black lg:w-auto lg:flex-row lg:pr-2 cursor-pointer" >
                <div onClick={handleIcon} className="my-auto" >
                    {icon ? <BiMoon  style={{ color: '#0ED2E2' }} size={25}/> : <MdOutlineWbSunny color="black" size={25}/>}
                </div>
                <div className="my-auto">
                    <IoNotificationsOutline className="dark:text-slate-100" size={25}/>
                </div>
                <div className="my-auto">
                    <FaUserCircle className="dark:text-slate-100" size={45}/>
                </div>
            </div>
           

        </div> */}