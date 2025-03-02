import columns from '@/components/NutrientsTable/columns'
import { AIResponse } from '@/components/NutrientsTable/models'
import { Paper, Skeleton, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'

interface TotalTableProps {
  productsAnalysis: AIResponse['productsAnalysis']
  isLoading: boolean
}

export default function NutrientsTable({ productsAnalysis, isLoading }: TotalTableProps) {
  const table = useReactTable({ columns, data: productsAnalysis, getCoreRowModel: getCoreRowModel() })
  if (isLoading)
    return (
      <Paper>
        <Skeleton variant="rectangular" height={400} />
      </Paper>
    )
  return (
    <Paper sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
      <Table>
        <TableHead>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableCell align="center" key={header.id} colSpan={header.colSpan}>
                  {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TableCell align="center" key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  )
}
