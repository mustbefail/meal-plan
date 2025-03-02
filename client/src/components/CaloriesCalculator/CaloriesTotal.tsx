import { Product, ProductCalculated } from '@/components/CaloriesCalculator/models'
import NutrientsTable from '@/components/NutrientsTable/NutrientsTable'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useMemo } from 'react'

interface CaloriesTotalProps {
  products: Product[]
}

export default function CaloriesTotal({ products }: CaloriesTotalProps) {
  const resultTotalWeight: ProductCalculated[] = useMemo(
    () =>
      products.map(({ productWeight, prot, fats, carbo, calories, productName }) => ({
        productName,
        productWeight,
        prot: (prot * (productWeight / 100)).toFixed(2),
        fats: (fats * (productWeight / 100)).toFixed(2),
        carbo: (carbo * (productWeight / 100)).toFixed(2),
        caloriesTotal: (calories * (productWeight / 100)).toFixed(2)
      })),
    [products]
  )
  console.log(resultTotalWeight)
  return (
    <Box>
      <Typography variant="h5">Total calories per product weight: </Typography>
      <NutrientsTable products={resultTotalWeight} />
    </Box>
  )
}
