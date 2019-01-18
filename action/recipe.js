import { ADD_RECIPE, SET_RECIPE, FETCH_RECIPES } from '../constants/action-types';

export const addReceipent = (name) => ({
    type: ADD_RECIPE, name
});

export const setRecipe = (data) => ({
    type: SET_RECIPE, 
    payload: data 
})

export const fetchRecipes = () => ({
    type: FETCH_RECIPES
  });


