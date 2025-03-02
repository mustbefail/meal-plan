import { ProductsAnalysis } from '@/components/NutrientsTable/models'
import { Typography } from '@mui/material'
import { createColumnHelper } from '@tanstack/react-table'

const columnHelper = createColumnHelper<ProductsAnalysis>()

const columns = [
  columnHelper.group({
    id: 'productsAnalysis',
    header: () => <Typography>Products Analysis</Typography>,
    columns: [
      columnHelper.accessor('productName', {
        id: 'productName',
        header: () => <Typography>Product Name</Typography>,
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id
      }),
      columnHelper.accessor('weight.units', {
        id: 'weight',
        header: () => <Typography>Product Weight</Typography>,
        cell: (info) => info.getValue()
      }),
      columnHelper.group({
        id: 'calories',
        header: () => <Typography>Calories</Typography>,
        columns: [
          columnHelper.accessor((row) => row.calories.perHundred, {
            id: 'calories.perHundred',
            header: () => <Typography>per 100g</Typography>,
            cell: (info) => info.getValue()
          }),
          columnHelper.accessor((row) => row.calories.total, {
            id: 'calories.perWeight',
            header: () => <Typography>per weigh</Typography>,
            cell: (info) => info.getValue()
          })
        ]
      }),
      columnHelper.group({
        id: 'nutrients',
        header: () => <Typography>Nutrients per 100g</Typography>,
        columns: [
          columnHelper.accessor((row) => row.nutrients.perHundred.proteins, {
            id: 'prot',
            header: () => <Typography>Proteins</Typography>,
            cell: (info) => info.getValue()
          }),
          columnHelper.accessor((row) => row.nutrients.perHundred.fats, {
            id: 'fats',
            header: () => <Typography>Fats</Typography>,
            cell: (info) => info.getValue()
          }),
          columnHelper.accessor((row) => row.nutrients.perHundred.carbohydrates, {
            id: 'carbohydrates',
            header: () => <Typography>Carbohydrates</Typography>,
            cell: (info) => info.getValue()
          })
        ]
      }),
      columnHelper.group({
        id: 'perWeight',
        header: () => <Typography>Nutrients per weight</Typography>,
        columns: [
          columnHelper.accessor((row) => row.nutrients.total.proteins, {
            id: 'protTotal',
            header: () => <Typography>Proteins</Typography>,
            cell: (info) => info.getValue()
          }),
          columnHelper.accessor((row) => row.nutrients.total.fats, {
            id: 'fatsTotal',
            header: () => <Typography>Fats</Typography>,
            cell: (info) => info.getValue()
          }),
          columnHelper.accessor((row) => row.nutrients.total.carbohydrates, {
            id: 'carboTotal',
            header: () => <Typography>Carbohydrates</Typography>,
            cell: (info) => info.getValue()
          })
        ]
      })
    ]
  })
]

export default columns
