export const anthropicConfig = {
  model: 'claude-3-7-sonnet-20250219',
  max_tokens: 3297,
  temperature: 1,
  system:
    'you are a nutritionist\nyou select the list of products and carefully calculates the nutrients and sends them in json format'
}

export const controlExample =
  '<examples>\n<example>\n<PRODUCT_LIST>\n1. Куряче філе - 180г\n2. Гречка - 120г\n3. Морква - 80г\n4. Цибуля - 50г\n5. Олія оливкова - 20мл\n6. Йогурт натуральний - 100г\n7. Яблуко - 1 шт\n8. Горіхи волоські - 30г\n9. Помідори черрі - 100г\n10. Огірок - 1 шт\n11. Сир твердий - 40г\n12. Хліб цільнозерновий - 2 скибочки\n</PRODUCT_LIST>\n<PREPARED_DISH_WEIGHT>\n620г\n</PREPARED_DISH_WEIGHT>\n<ideal_output>\n{\n  "productsAnalysis": [\n    {\n      "productName": "Куряче філе",\n      "weight": {\n        "unitsTitle": "грами",\n        "units": 180\n      },\n      "calories": {\n        "perHundred": 110,\n        "total": 198\n      },\n      "nutrients": {\n        "perHundred": {\n          "proteins": 23,\n          "fats": 2,\n          "carbohydrates": 0\n        },\n        "total": {\n          "proteins": 41.4,\n          "fats": 3.6,\n          "carbohydrates": 0\n        }\n      }\n    },\n    {\n      "productName": "Гречка",\n      "weight": {\n        "unitsTitle": "грами",\n        "units": 120\n      },\n      "calories": {\n        "perHundred": 343,\n        "total": 411.6\n      },\n      "nutrients": {\n        "perHundred": {\n          "proteins": 12.6,\n          "fats": 3.3,\n          "carbohydrates": 62.1\n        },\n        "total": {\n          "proteins": 15.12,\n          "fats": 3.96,\n          "carbohydrates": 74.52\n        }\n      }\n    },\n    {\n      "productName": "Морква",\n      "weight": {\n        "unitsTitle": "грами",\n        "units": 80\n      },\n      "calories": {\n        "perHundred": 41,\n        "total": 32.8\n      },\n      "nutrients": {\n        "perHundred": {\n          "proteins": 0.9,\n          "fats": 0.2,\n          "carbohydrates": 9.6\n        },\n        "total": {\n          "proteins": 0.72,\n          "fats": 0.16,\n          "carbohydrates": 7.68\n        }\n      }\n    },\n    {\n      "productName": "Цибуля",\n      "weight": {\n        "unitsTitle": "грами",\n        "units": 50\n      },\n      "calories": {\n        "perHundred": 40,\n        "total": 20\n      },\n      "nutrients": {\n        "perHundred": {\n          "proteins": 1.1,\n          "fats": 0.1,\n          "carbohydrates": 9.3\n        },\n        "total": {\n          "proteins": 0.55,\n          "fats": 0.05,\n          "carbohydrates": 4.65\n        }\n      }\n    },\n    {\n      "productName": "Олія оливкова",\n      "weight": {\n        "unitsTitle": "мілілітри",\n        "units": 20\n      },\n      "calories": {\n        "perHundred": 884,\n        "total": 176.8\n      },\n      "nutrients": {\n        "perHundred": {\n          "proteins": 0,\n          "fats": 99.9,\n          "carbohydrates": 0\n        },\n        "total": {\n          "proteins": 0,\n          "fats": 19.98,\n          "carbohydrates": 0\n        }\n      }\n    },\n    {\n      "productName": "Йогурт натуральний",\n      "weight": {\n        "unitsTitle": "грами",\n        "units": 100\n      },\n      "calories": {\n        "perHundred": 60,\n        "total": 60\n      },\n      "nutrients": {\n        "perHundred": {\n          "proteins": 3.5,\n          "fats": 3.2,\n          "carbohydrates": 4.7\n        },\n        "total": {\n          "proteins": 3.5,\n          "fats": 3.2,\n          "carbohydrates": 4.7\n        }\n      }\n    },\n    {\n      "productName": "Яблуко",\n      "weight": {\n        "unitsTitle": "штуки",\n        "units": 1\n      },\n      "calories": {\n        "perHundred": 52,\n        "total": 78\n      },\n      "nutrients": {\n        "perHundred": {\n          "proteins": 0.4,\n          "fats": 0.4,\n          "carbohydrates": 13.8\n        },\n        "total": {\n          "proteins": 0.6,\n          "fats": 0.6,\n          "carbohydrates": 20.7\n        }\n      }\n    },\n    {\n      "productName": "Горіхи волоські",\n      "weight": {\n        "unitsTitle": "грами",\n        "units": 30\n      },\n      "calories": {\n        "perHundred": 654,\n        "total": 196.2\n      },\n      "nutrients": {\n        "perHundred": {\n          "proteins": 15.2,\n          "fats": 65.2,\n          "carbohydrates": 7\n        },\n        "total": {\n          "proteins": 4.56,\n          "fats": 19.56,\n          "carbohydrates": 2.1\n        }\n      }\n    },\n    {\n      "productName": "Помідори черрі",\n      "weight": {\n        "unitsTitle": "грами",\n        "units": 100\n      },\n      "calories": {\n        "perHundred": 18,\n        "total": 18\n      },\n      "nutrients": {\n        "perHundred": {\n          "proteins": 0.9,\n          "fats": 0.2,\n          "carbohydrates": 3.9\n        },\n        "total": {\n          "proteins": 0.9,\n          "fats": 0.2,\n          "carbohydrates": 3.9\n        }\n      }\n    },\n    {\n      "productName": "Огірок",\n      "weight": {\n        "unitsTitle": "штуки",\n        "units": 1\n      },\n      "calories": {\n        "perHundred": 15,\n        "total": 22.5\n      },\n      "nutrients": {\n        "perHundred": {\n          "proteins": 0.8,\n          "fats": 0.1,\n          "carbohydrates": 3.6\n        },\n        "total": {\n          "proteins": 1.2,\n          "fats": 0.15,\n          "carbohydrates": 5.4\n        }\n      }\n    },\n    {\n      "productName": "Сир твердий",\n      "weight": {\n        "unitsTitle": "грами",\n        "units": 40\n      },\n      "calories": {\n        "perHundred": 364,\n        "total": 145.6\n      },\n      "nutrients": {\n        "perHundred": {\n          "proteins": 25.2,\n          "fats": 29.5,\n          "carbohydrates": 0.3\n        },\n        "total": {\n          "proteins": 10.08,\n          "fats": 11.8,\n          "carbohydrates": 0.12\n        }\n      }\n    },\n    {\n      "productName": "Хліб цільнозерновий",\n      "weight": {\n        "unitsTitle": "скибочки",\n        "units": 2\n      },\n      "calories": {\n        "perHundred": 220,\n        "total": 110\n      },\n      "nutrients": {\n        "perHundred": {\n          "proteins": 8.5,\n          "fats": 1.2,\n          "carbohydrates": 45.5\n        },\n        "total": {\n          "proteins": 4.25,\n          "fats": 0.6,\n          "carbohydrates": 22.75\n        }\n      }\n    }\n  ],\n  "totalCalories": 1469.5,\n  "totalNutrients": {\n    "proteins": 82.88,\n    "fats": 63.86,\n    "carbohydrates": 146.52\n  },\n  "preparedDishCalories": 910.09,\n  "preparedDishNutrients": {\n    "proteins": 51.39,\n    "fats": 39.59,\n    "carbohydrates": 90.84\n  }\n}\n</ideal_output>\n</example>\n</examples>\n\n'

export const getCombinePrompt = ({
  productList,
  preparedDishWeight
}: {
  productList: string
  preparedDishWeight: string
}) =>
  `You are an AI assistant acting as a professional nutritionist.
   Your task is to analyze a list of products, calculate their calorie and nutrient content, and potentially calculate calories for a prepared dish.
    The input will be in Ukrainian.
    
Important notes:
- Include the "nutrients" field in your JSON output for both per 100g and total amounts.
- Only include the "preparedDishCalories" and "preparedDishNutrients" fields if a prepared dish weight was provided.
- Convert all product names and units to Ukrainian in your final output.
- Ensure all calculations are accurate.
- Your final response must ONLY contain the valid JSON output, with no additional text, starting with {.

Here is the list of products you need to analyze:

<product_list>
${productList}
</product_list>

If a prepared dish weight is provided, you will find it here:

<prepared_dish_weight>
${preparedDishWeight}
</prepared_dish_weight>

Please follow these steps in your analysis:

1. List all products with their Ukrainian names and English translations.
2. For each product:
   a. Identify the product name and amount (if provided).
   b. Estimate the calories per 100g based on your nutritional knowledge.
   c. Calculate the calories for the given amount of the product.
   d. Estimate the nutrient content (proteins, fats, carbohydrates) per 100g.
   e. Calculate the nutrient content for the given amount of the product.
3. Calculate the total calorie content by summing up the calories of all individual products.
4. Sum up the total weight of all ingredients (if available).
5. If a prepared dish weight is provided:
   a. Calculate the ratio of the prepared dish weight to the total ingredient weight.
   b. Multiply the total calorie content and nutrient content by this ratio to get the prepared dish calories and nutrients.
   c. Estimate the calories per 100g in prepared dish.

For each product, list its Ukrainian name,
English translation, and your estimates for calories and nutrients per 100g, explaining your reasoning.
If a prepared dish weight is provided, show your calculations for the ratio and final prepared dish values.

Provide your final output in JSON format. This should be a valid JSON string.
`
