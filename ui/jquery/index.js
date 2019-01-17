import $ from 'jquery';
import store from '../../store/store';
import { addReceipent } from '../../action/recipe';

function updateUI() {
    const { recipes } = store.getState();
    const renderRecipe = (recipe) => `<li>${ recipe.name }</li>`;
    
    $('.recipes > ul').html(recipes.map(renderRecipe));
};

 function handleAdd() {

     const $recipeName = $('.recipes > input');
     store.dispatch(addReceipent($recipeName.val()));
     $recipeName.val('');
 }
    
    

export default function loadUI() {
    $('#app').append(`
        <div class="recipes">
            <h2>Recipes:</h2>
            <ul></ul>
            <input type="text" />
            <button>Add</button>
        </div>
    `);

    store.subscribe(updateUI);
    $(document).on('click', '.recipes > button', handleAdd);

    updateUI();
};