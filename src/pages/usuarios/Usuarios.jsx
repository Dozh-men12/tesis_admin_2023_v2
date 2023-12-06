import React from 'react'
import UsuariosTable from './components/UsuariosTable'

function Usuarios() {
  return (
    <main className='h-full flex flex-col gap-2' >
      <div className='my-5 border-gray-500 border-b-2 '>
        <h1 className='text-3xl uppercase'>Usuarios registrados</h1>
      </div>
      <div className='container mx-auto'>
        <div className='bg-slate-500 w-full py-5 lg:flex lg:flex-wrap lg:gap-4'>
          <div>
            Filtro
          </div>
        </div>
        <div className='bg-white my-5 grid w-full auto-rows-auto grid-cols-1 justify-center'>
          <div className='pt-7'>
            <UsuariosTable/>
          </div>
        </div>

      </div>
      
      
     
    </main>
  )
}

export default Usuarios