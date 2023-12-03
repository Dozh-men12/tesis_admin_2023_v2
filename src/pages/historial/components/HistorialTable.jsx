import React from "react";
import { useReactTable , getCoreRowModel ,flexRender , getPaginationRowModel } from "@tanstack/react-table";
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

  const table = useReactTable({ data, columns, getCoreRowModel: getCoreRowModel(),getPaginationRowModel: getPaginationRowModel()});

  return (
    <div>
      <table className="container mx-auto">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th className="bg-slate-600" key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody>
            {table.getRowModel().rows.map((row) => (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                      <td>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </td>
                  ))}
                </tr>
            ))}
        </tbody>

        <tfoot>
          <tr>
            <td>Deporte</td>
          </tr>
        </tfoot>
      </table>

        <button onClick={()=>table.setPageIndex(0)} className="px-3 py-2 bg-slate-500 mx-3">
                Primera pagina
        </button>
        <button onClick={()=> table.setPageIndex(1)} className="px-3 py-2 bg-slate-500 mx-3">
                Segunda pagina
        </button>
        <button onClick={() => table.previousPage()} className="px-3 py-2 bg-slate-500 mx-3">
          Pagina anterior
        </button>
        <button onClick={() => table.nextPage()} className="px-3 py-2 bg-slate-500 mx-3">
          Pagina siguiente
        </button>
        <button onClick={() =>table.setPageIndex(table.getPageCount() - 1 )} className="px-3 py-2 bg-slate-500 mx-3">
                Ultima pagina
        </button>
      </div>
  );
}

export default HistorialTable;
