
const rootReducer = (state, action) => {

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

export default rootReducer;
// import {combineReducers} from 'redux';
// import recipesReducer  from './recipes';
// import ingredientsReducer  from './ingredients';

// const rootReducer = (state, action) => {

//     return Object.assign({}, state, {
//         recipes: recipesReducer(state.recipes, action),
//         ingredients: ingredientsReducer(state.ingredients, action)
//     });
// }



