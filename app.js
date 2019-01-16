import store from './store/store';

import { addReceipent } from './action/recipe';
import { addIngredient } from './action/ingredient';


store.dispatch(addReceipent("Bakso"));
store.dispatch(addIngredient('Bakso', 'Daging kambing', 5));


store.dispatch(addReceipent("Martabak"));
store.dispatch(addIngredient('Martabak', 'Terigu', 100));

window.store = store;

// const reducer = (state, action) => 
// action.type === 'INC' ? state + 1 : state;

// const initialState = 0;

// const store = createStore(reducer, initialState);

// store.subscribe(() => document.getElementById('counter').innerText = store.getState());

// setInterval(() => store.dispatch({ type: 'INC' }), 500);

// console.log("Redux started");
