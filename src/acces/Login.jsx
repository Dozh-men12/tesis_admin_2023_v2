import logo from '../assets/tecsup_logo.png'
import {FcGoogle} from 'react-icons/fc'
// Firebase
import 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";
import { useState } from 'react';
import { FaEye,FaEyeSlash } from "react-icons/fa";

// Configuración de Firebase (obtén esto desde tu consola de Firebase)
const firebaseConfig = {
    apiKey: "AIzaSyBgLs_0PZqGk7GoOodmoJvniG1oG3oLcK8",
    authDomain: "tesis-e4de2.firebaseapp.com",
    projectId: "tesis-e4de2",
    storageBucket: "tesis-e4de2.appspot.com",
    messagingSenderId: "318054575799",
    appId: "1:318054575799:web:9b79b687f664683a302732",
    measurementId: "G-M8LFTGHE90"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);


import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";

function Login() {
    // Importando useNavigate de react router dom para la validación de inicio de sesion con google
    const navigate = useNavigate();
    // Función para manejar el inicio de sesión con Google
    const signInWithGoogle = () => {  
        console.log("si inicia pop up");
        const provider = new GoogleAuthProvider();
    
        signInWithPopup(auth, provider)
            .then((result) => { 
                console.log("Usuario autenticado:", result.user);

                // accesos especiales para correos
                const allowedEmails = [
                    "carlos.herrera.c@tecsup.edu.pe",
                    "oscar.hurtado@tecsup.edu.pe"
                ];
                // Aquí puedes redirigir al usuario a otra página si lo deseas, o hacer otras operaciones
                if (allowedEmails.includes(result.user.email)) {
                    navigate("/");
                } else {
                    auth.signOut();
                    alert("Solo se permiten correos especiales")
                }
            })
            .catch((error) => { 
                console.error("Error durante el inicio de sesión con Google:", error);
            });
    };

    //-------------------------FUNCION PARA ACTUALIZAR EL ICONO DE PASSWORD-------------
    const [password,setPassword] = useState(false)

    const viewPassword = () =>{
        setPassword(!password)
    }

    return (
        <div className="flex justify-center items-center h-screen font-[Lato]   bg-slate-800">
            <div className="grid md:grid-cols-2 md:justify-center w-[1190px] h-[611px] rounded-xl md:shadow-[0_0_24px_0px_rgba(0,0,0,0.3)] bg-white">
                <div className='flex flex-col font-bold'>
                    <div className='flex justify-center items-center mt-10'>
                        <img src={logo}  alt="Logo de tecsup" className='w-[370px] ' />
                    </div>
                    <div className='mt-[55px] flex justify-center items-center flex-col gap-4'>
                        <div className='flex flex-col gap-1'>
                            <p className='font-bold '>Ingrese su correo</p>
                            <input type="email" placeholder='admin@tecsup.edu.pe' className='border border-gray-dark rounded-md  w-[452px] h-[34px] px-3' />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <p>Ingrese su contraseña</p>
                            {/* <span></span> */}
                            <div className='border border-gray-dark rounded-md  w-[452px] h-[34px] px-3 flex'>
                                <input type={password ? "text" : "password"} placeholder='Ingrese su contraseña' className='w-[400px] h-[30px] mt-[1px]  shadow-none bg-none border-none focus:outline-none focus:ring-0' required />
                                <div className='my-auto ml-[9px] cursor-pointer' onClick={viewPassword}>
                                    {password ? <FaEye  size={20}/> : <FaEyeSlash size={20}/>}
                                </div>
                            </div>                            
                        </div>                      
                        <div>                            
                                <Link to='/inicio'>
                                    <button className='px-[170px] py-2 text-center bg-[#18A8D6] flex flex-row justify-center items-center rounded-md'>
                                        INICAR SESION
                                    </button>
                                </Link>                                     
                        </div>
                        <div>
                            <button className=' px-20 py-2 text-center bg-[#3369e8] rounded-md font-bold flex flex-row justify-center items-center ' onClick={signInWithGoogle}>                                
                                <FcGoogle size={29} className='bg-white  align-middle inline-block mr-12'/>                             
                                Ingresa con tu correo de Tecsup
                            </button>
                        </div>
                        <a href="http://facebook.com" target="_blank" rel="noopener noreferrer" className='text-center mt-[15px] text-[0.875em]  hover:text-blue-300 hover:underline underline-offset-1'>
                            ¿Olvidó su contraseña?
                        </a>          
                    </div>
                </div>
                <div className='bg-[#70BBDB] md:rounded-r-xl '>

                </div>
              
              {/*   <div className="login-header">
                    <img  className='logo' src={logo} alt="Logo de tecsup" />
                </div>
                <div className="login-body">
                    <form action="">
                        <label className='label' htmlFor="username">Correo electronico</label>
                        <input type="text" placeholder="admin.tecsup@tecsup.edu.pe" autoFocus="autoFocus" id="username" /> <br />

                        <label htmlFor="password" className="label">Contraseña</label>
                        <input type="password" placeholder="Password" autoFocus="autoFocus" id="password" /> <br />

                        <a id='a' target="_blank_" href="https://Facebook.com">¿Olvido la contraseña?</a>

                        <div className="buttons-container">

                            <Link to="/inicio-admin"><button className="button-login">INICIAR SESIÓN</button></Link><br />
                            <button type="button" onClick={signInWithGoogle} className="button-login-google">
                                <div className='gogle-i-container'>
                                    <FcGoogle size={35} className='google_icon'/>
                                </div>                                
                                Ingresa con tu correo de Tecsup
                            </button>
                        </div>
                    </form>
                </div> */}
            </div>
        </div>
    );
}

export default Login; 