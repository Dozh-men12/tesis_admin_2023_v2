import React from 'react'

import { useFetch } from './constans/useFetch'



function Usuarios() {

  const { data } = useFetch('http://localhost:9000/api/usuarios')  


  return (
    <main className='h-full flex flex-col gap-2' >
      <div className='my-5 border-gray-500 border-b-2 '>
        <h1 className='text-3xl uppercase'>Usuarios registrados</h1>
      </div>
      <div className='container mx-auto'>
        <div className='bg-slate-500 w-full py-5 lg:flex lg:flex-wrap lg:gap-4'>          
            <p>Filtro</p>          
        </div>        
        <div className='pt-7'>

          <ul>
            {data?.map((user)=>(
              <li key={user.id}>
              {user.nombres + ' ' + user.apellidos}
              </li>
            ))}
          </ul>
         {/*  <UsuariosTable/> */}
        </div>
      </div>
      
      
     
    </main>
  )
}

export default Usuarios