import CloseIcon from '@mui/icons-material/Close'
import Box from '@mui/material/Box'
import { TextFieldElement, UseFieldArrayRemove } from 'react-hook-form-mui'

export default function ProductRow({ index, remove }: { index: number; remove: UseFieldArrayRemove }) {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: '2fr repeat(5, 1fr) 50px',
        alignItems: 'center',
        gap: 2
      }}
    >
      <TextFieldElement name={`products.${index}.productName`} label="Product name" required size="small" fullWidth />
      <TextFieldElement
        name={`products.${index}.productWeight`}
        label="Product weight"
        required
        size="small"
        type="number"
        fullWidth
      />
      <TextFieldElement
        name={`products.${index}.calories`}
        label="Calories (g) / 100 g"
        required
        size="small"
        type="number"
      />
      <TextFieldElement
        name={`products.${index}.prot`}
        label="Proteins (g) / 100 g"
        required
        size="small"
        type="number"
      />
      <TextFieldElement name={`products.${index}.fats`} label="Fats (g) / 100g" required size="small" type="number" />
      <TextFieldElement
        name={`products.${index}.carbo`}
        label="Carbohydrates (g) / 100g"
        required
        size="small"
        type="number"
      />
      <CloseIcon onClick={() => remove(index)} />
    </Box>
  )
}
