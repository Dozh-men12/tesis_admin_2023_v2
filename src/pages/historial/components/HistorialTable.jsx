import React from "react";
import { useState } from "react";
import { FiChevronRight, FiChevronLeft ,FiChevronsRight ,FiChevronsLeft   } from "react-icons/fi";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel
} from "@tanstack/react-table";
import data from "../../../../MOCK_DATA.json";

function HistorialTable() {
  const columns = [
    //ACA COLOCAS EN HEADER: EL ENCABEZADO COMO QUIERES QUE SE MUESTRE Y DENTRO DEL accessorKey: El dato del cual quieres que lea
    {
      header: "Id",
      accessorKey: "id",
    },
    {
      header: "Deporte",
      accessorKey: "Deporte",
    },
    {
      header: "Fecha",
      accessorKey: "Fecha",
    },
    {
      header: "Hora",
      accessorKey: "Hora",
    },
    {
      header: "Usuario",
      accessorKey: "Usuario",
    },
    {
      header: "Estado",
      accessorKey: "Estado",
    },
  ];

  const [filtering, setFiltering] =useState("")

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state:{
      /* sorting, */
      globalFilter: filtering

    },
    /* onSortingChange: setSorting, */
    onGlobalFilterChange: setFiltering,
    
  });

  return (
    <section className=" flex flex-col gap-4">
      {/* <input type="text" value={filtering} onChange={e=>setFiltering(e.target.value)} /> */}
      <table className="container mx-auto h-screen max-h-[200px] ">
        <thead className="bg-sky-600">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th className="p-3  pl-5 text-center uppercase " key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody className="bg-white text-left">
          {table.getRowModel().rows.map((row) => (
            <tr className="border-b-2 border-gray-300" key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td className="py-4  text-center text-gray-500 whitespace-nowrap  pl-5 ">

                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>

       {/*  <tfoot>
          <tr>
            <td>Deporte</td>
          </tr>
        </tfoot> */}
      </table>

      <div className="flex flex-row gap-1 items-end justify-end">
      <button
        onClick={() => table.setPageIndex(0)}
        className="px-3 py-2 bg-slate-500 "
      >
        <div className="flex items-center justify-center">
          <FiChevronsLeft size={26}/>
        </div>        
      </button>
      {/* <button
        onClick={() => table.setPageIndex(1)}
        className="px-3 py-2 bg-slate-500 mx-3"
      >
        Segunda pagina
      </button> */}
      <button
        onClick={() => table.previousPage()}
        className="px-3 py-2 bg-slate-500"
      >
       <div className="flex items-center justify-center">
        <FiChevronLeft size={26}/>
       </div>
      </button>
      <button
        onClick={() => table.nextPage()}
        className="px-3 py-2 bg-slate-500 "
      >
        <div className="flex items-center justify-center">
        <FiChevronRight size={26}/>
        </div>
        
      </button>
      <button
        onClick={() => table.setPageIndex(table.getPageCount() - 1)}
        className="px-3 py-2 bg-slate-500 "
      >
        <div className="flex items-center justify-center">
        <FiChevronsRight size={26}/>
        </div>
        
      </button>
      </div>
    </section>
  );
}

export default HistorialTable;
