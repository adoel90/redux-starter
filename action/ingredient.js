
const ADD_INGREDIENT = 'ADD_INGREDIENT'

export const addIngredient = (recipes, name, quantity) => ({
    type: ADD_INGREDIENT, recipes, name, quantity
})