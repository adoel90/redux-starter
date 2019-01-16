import { createStore } from 'redux';
import rootReducer from '../reducer/index';

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

const store = createStore(rootReducer, initialState);

export default store;