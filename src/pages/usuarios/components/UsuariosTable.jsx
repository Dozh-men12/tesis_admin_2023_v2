import React from 'react'
import { FiChevronRight, FiChevronLeft ,FiChevronsRight ,FiChevronsLeft   } from "react-icons/fi";
import { dotSpinner } from 'ldrs'

dotSpinner.register()


import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel
} from "@tanstack/react-table";

import { useFetch } from '../../../constans/useFetch';
/* import data from "../../../../MOCK_DATA_USERS.json"; */
import { columns } from "../constans/Index"

function UsuariosTable() {

  const { data,loading } = useFetch('http://localhost:9000/api/usuarios')  

  const table = useReactTable({
    data: data || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  if (loading) {
    return <l-dot-spinner
    size="40"
    speed="0.9" 
    color="black" 
  >Cargando</l-dot-spinner>;
  }

  /* if (error) {
    return <p>Error al cargar los datos: {error.message}</p>;
  }
 */

  return (
    <section className=" flex flex-col gap-4 sm:max-h-[250px] sm:min-h-[150px] md:min-h-[550px] ">
      {/* <input type="text" value={filtering} onChange={e=>setFiltering(e.target.value)} /> */}
      <div className="mx-auto w-full overflow-x-auto">
        <table className="w-full shadow text-center ">
          <thead className="bg-sky-600 border-b-2 border-gray-200">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr className="only:text-center only:text-sm only:font-semibold only:tracking-wide" key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th className="max-w-max px-2  font-semibold text-lg text-white py-4" key={header.id}>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="divide-y divide-slate-500 text-gray-500">
            {table.getRowModel().rows.map((row) => (
              <tr className="bg-white text-center " key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td className="whitespace-nowrap p-3 text-base text-gray-600 px-10 ">

                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>       
        </table>
      </div>

      <div className="flex flex-row gap-1 items-end justify-end">
        <button onClick={() => table.setPageIndex(0)} className="p-2 bg-sky-600  rounded-md">
          <div className="flex items-center justify-center">
            <FiChevronsLeft size={26}/>
          </div>        
        </button>
        
        <button onClick={() => table.previousPage()}className="p-2 bg-sky-600  rounded-md">
          <div className="flex items-center justify-center">
            <FiChevronLeft size={26}/>
          </div>
        </button>

        <button onClick={() => table.nextPage()} className="p-2 bg-sky-600 rounded-md ">
          <div className="flex items-center justify-center">
            <FiChevronRight size={26}/>
          </div>        
        </button>

        <button onClick={() => table.setPageIndex(table.getPageCount() - 1)} className="p-2 bg-sky-600  rounded-md">
          <div className="flex items-center justify-center">
            <FiChevronsRight size={26}/>
          </div>        
        </button>    
      </div>
      
    </section>
  )
}

export default UsuariosTable