import { useState } from "react";

const Buttons = ({ icono, texto, onClick, isActive }) => {
  return (
    <>
      <button
        className={isActive ? 'button-navbar-clicked' : 'button-navbar'}
        onClick={onClick}
      >
        <div className='flex justify-center items-center mx-5 gap-10 '>
          {icono}
          <span className="dark:hover:text-white">{texto}</span>
        </div>
      </button>
    </>
  );
};

export default Buttons;


/* import { useState } from "react";


const Buttons = ({ icono, texto }) =>{

    const [color , setColor] = useState(true);

    const handleColor= () =>{
        setColor(!color);
    }

  return (
    <>                 
        <button className={color ? 'button-navbar' : 'button-navbar-clicked'} onClick={handleColor}>
                <div className='flex justify-center items-center mx-5 gap-10 '>
                    {icono}
                    <span className="dark:hover:text-white">{texto}</span>                        
                </div>  
                          
        </button>       
    </>
  );


};

export default Buttons; */