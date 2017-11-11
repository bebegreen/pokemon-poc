// import dragula from 'dragula'; 
import template from './itemList.html';
import './item-list.scss';

class ItemListCtrl {
 
  constructor() { 
    console.log(this.categories); 
  }
  $onInit() { 
    console.log(3)
  }
}

const ItemList = {
  bindings: { categories: '<' },
  controller: ItemListCtrl,
  template: `

    <h3 ng-if='!$ctrl.categories'>Loading Items...</h3>
    <div 
      class='categorie' 
      ng-repeat="cat in $ctrl.categories" 
    >
      <h2>
        {{cat.name}}
      </h2>
      <drop-zone data='cat.items'></drop-zone>
    </div>
  `
}

export default ItemList;

