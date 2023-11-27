
const Buttons = ({ icono, texto }) =>{
  return (
      <>                 
          <button className='button-navbar dark:bg-slate-800 dark:hover:bg-[#35aafd91] dark:text-white '>
                  <div className='flex justify-center items-center px-[20px] gap-3'>
                      {icono}
                      <span className="dark:hover:text-white">{texto}</span>                        
                  </div>          
          </button>       
      </>
  );


};

export default Buttons;