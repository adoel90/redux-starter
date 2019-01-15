import { createStore } from 'redux';

const initialState = {
	recipes: [
		{name: 'Omelete'}
	],
	ingredients: [
		{
			recipes: 'Omelete',
			name: 'Eggs',
			quantity: 2
		}]
};

const reducer = (state, action) => {
	switch (action.type){
		case 'ADD_RECIPE':
			return Object.assign({}, state, {
				recipes: state.recipes.concat({name: action.name})
			});

		case 'ADD_INGREDIENT':
			const newIngredient = {
				recipes: action.recipes,
				name: action.name,
				quantity: action.quantity
			};
			
			return Object.assign({}, state, {
				ingredients: state.ingredients.concat(newIngredient)
			});

	}

	return state;
};

export default store = createStore(reducer, initialState);