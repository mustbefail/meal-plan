import CalculatorForm from '@/components/CaloriesCalculator/CalculatorForm'
import { Stack, Typography } from '@mui/material'

export default function CaloriesCalculator() {
  return (
    <Stack spacing={2}>
      <Typography variant="h3">Calories Calculator</Typography>
      <CalculatorForm />
    </Stack>
  )
}
