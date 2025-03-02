import NutrientsTable from '@/components/NutrientsTable/NutrientsTable'
import useAIProducts from '@/components/ProductPrompt/hooks/useAIProducts'
import { Paper, Stack, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import SaveIcon from '@mui/icons-material/Save'
import { FormContainer, TextareaAutosizeElement, TextFieldElement } from 'react-hook-form-mui'

export default function ProductPrompt() {
  const { sendProductListToAI, isSending, isLoading, data } = useAIProducts()
  const onSubmitHandler = async (data: { productList: string; preparedDishWeight: number }) => {
    await sendProductListToAI(data)
  }
  console.log(data)

  return (
    <FormContainer onSuccess={onSubmitHandler} defaultValues={{ productList: '', preparedDishWeight: 0 }}>
      <Stack alignItems="center" spacing={5} sx={{ width: '100%' }}>
        <Typography variant="h3" marginBottom={20}>
          Product List
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, mb: 5 }}>
          <TextareaAutosizeElement
            rows={10}
            name="productList"
            label="Product List"
            required
            disabled={isSending}
            sx={{ width: '500px' }}
          />
          <TextFieldElement name="preparedDishWeight" label="Prepared dish weight" type="number" disabled={isSending} />
          <Button loading={isSending} type="submit" loadingPosition="center" startIcon={<SaveIcon />}>
            Submit
          </Button>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
          <Typography variant="h3" marginBottom={5}>
            Total per product weight:
          </Typography>
          {!data ||
            (!data.empty && (
              <Paper elevation={3} sx={{ p: 2, width: '500px' }}>
                <Typography variant="h5">Total products calories: {data.totalCalories}</Typography>
                <Typography variant="h5">Total prepared dish calories: {data.preparedDishCalories}</Typography>
                <Typography variant="h5">Total nutrients: </Typography>
                <Box sx={{ width: '100%', display: 'flex', alignItems: 'flex-end', flexDirection: 'column' }}>
                  <Typography variant="h6">Proteins: {data.totalNutrients.proteins}</Typography>
                  <Typography variant="h6">Fats: {data.totalNutrients.fats}</Typography>
                  <Typography variant="h6">Carbohydrates: {data.totalNutrients.carbohydrates}</Typography>
                </Box>
                <Typography variant="h5">Total prepared dish nutrients: </Typography>
                <Box sx={{ width: '100%', display: 'flex', alignItems: 'flex-end', flexDirection: 'column' }}>
                  <Typography variant="h6">Proteins: {data.preparedDishNutrients.proteins}</Typography>
                  <Typography variant="h6">Fats: {data.preparedDishNutrients.fats}</Typography>
                  <Typography variant="h6">Carbohydrates: {data.preparedDishNutrients.carbohydrates}</Typography>
                </Box>
              </Paper>
            ))}
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
          <Typography variant="h3" marginBottom={5}>
            Product nutrients table
          </Typography>
          {!data || (!data.empty && <NutrientsTable productsAnalysis={data.productsAnalysis} isLoading={isLoading} />)}
        </Box>
      </Stack>
    </FormContainer>
  )
}
