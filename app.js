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
}

const reducer = (state, action) => state;
const store = createStore(reducer, initialState);

window.store = store;



	// const reducer = (state, action) => 
	// action.type === 'INC' ? state + 1 : state;

	// const initialState = 0;
	
	// const store = createStore(reducer, initialState);
	
	// store.subscribe(() => document.getElementById('counter').innerText = store.getState());
	
	// setInterval(() => store.dispatch({ type: 'INC' }), 500);
	
	// console.log("Redux started");

