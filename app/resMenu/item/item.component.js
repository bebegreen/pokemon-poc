import template from './item.html';
import './item.scss';

class ItemCtrl {
  constructor(itemListService, $scope) {
    
    'ngInject';
      
    
  }

}

const ItemList = {
  bindings: {
    data: '='
  },
  controller: ItemCtrl,
  template
}

export default ItemList;