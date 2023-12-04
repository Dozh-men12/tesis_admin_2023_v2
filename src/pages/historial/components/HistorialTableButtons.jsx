import React from 'react'

function HistorialTableButtons({ icono , onclick }) {
  return (
    <button onClick={onclick} className="p-2 bg-sky-600  rounded-md">
        <div className="flex items-center justify-center">
          {icono}
        </div>
    </button>
  )
}

export default HistorialTableButtons