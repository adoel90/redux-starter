import { ADD_INGREDIENT } from '../constants/action-types';

export const addIngredient = (recipes, name, quantity) => ({
    type: ADD_INGREDIENT, recipes, name, quantity
});