export interface Product {
  productName: string
  productWeight: number
  prot: number
  fats: number
  carbo: number
  calories: number
}

export interface ProductCalculated {
  productName: string
  productWeight: number
  prot: string
  fats: string
  carbo: string
  caloriesPer100g: string
  caloriesTotal: string
}
