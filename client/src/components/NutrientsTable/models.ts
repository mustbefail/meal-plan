export interface AIResponse {
  productsAnalysis: ProductsAnalysis[]
  totalCalories: number
  totalNutrients: TotalNutrients
  preparedDishCalories: number
  preparedDishNutrients: PreparedDishNutrients
}

export interface ProductsAnalysis {
  productName: string
  weight: Weight
  calories: Calories
  nutrients: Nutrients
}

export interface Weight {
  unitsTitle: string
  units: number
}

export interface Calories {
  perHundred: number
  total: number
}

export interface Nutrients {
  perHundred: PerHundred
  total: Total
}

export interface PerHundred {
  proteins: number
  fats: number
  carbohydrates: number
}

export interface Total {
  proteins: number
  fats: number
  carbohydrates: number
}

export interface TotalNutrients {
  proteins: number
  fats: number
  carbohydrates: number
}

export interface PreparedDishNutrients {
  proteins: number
  fats: number
  carbohydrates: number
}
