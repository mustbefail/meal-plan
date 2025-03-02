import { FormContainer } from 'react-hook-form-mui'
import ProductForm from '@/components/CaloriesCalculator/ProductForm'
import CaloriesTotal from '@/components/CaloriesCalculator/CaloriesTotal'
import { useState } from 'react'
import { Product } from '@/components/CaloriesCalculator/models'

export default function CalculatorForm() {
  const [products, setProducts] = useState<Product[]>([])
  return (
    <FormContainer
      onSuccess={({ products }) => setProducts(products)}
      defaultValues={{ products: [{ productName: '', productWeight: 0, prot: 0, fats: 0, carbo: 0, calories: 0 }] }}
    >
      <ProductForm />
      <CaloriesTotal products={products} />
    </FormContainer>
  )
}
