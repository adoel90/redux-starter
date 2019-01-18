import store from './store/store';

import { addReceipent } from './action/recipe';
import { addIngredient } from './action/ingredient';
import loadUI from './ui/jquery/index';

// store.dispatch(addReceipent("Bakso"));
// store.dispatch(addIngredient('Bakso', 'Daging kambing', 5));

// store.dispatch(addReceipent("Martabak"));
// store.dispatch(addIngredient('Martabak', 'Terigu', 100));

loadUI();

window.store = store;

