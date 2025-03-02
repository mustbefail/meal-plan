import ProductRow from '@/components/CaloriesCalculator/ProductRow'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { useFieldArray, useFormContext } from 'react-hook-form-mui'

export default function ProductForm() {
  const { control } = useFormContext()
  const { fields, append, remove } = useFieldArray({
    name: 'products',
    control
  })
  return (
    <Box sx={{ display: 'grid', gap: 2 }}>
      {fields.map((field, index) => (
        <ProductRow key={field.id} index={index} remove={remove} />
      ))}
      <Button onClick={() => append({ productName: '', productWeight: 0, prot: 0, fats: 0, carbo: 0, calories: 0 })}>
        Add product
      </Button>
      <Button type={'submit'}>Calculate</Button>
    </Box>
  )
}
