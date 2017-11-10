// import dragula from 'dragula'; 
import template from './itemList.html';
import './item-list.scss';

class ItemListCtrl {
  constructor(itemListService, $scope) {
    'ngInject'

    this.state = {
      loading: true,
      catItems: ''
    }

    itemListService.getCatItems().then(catItems => {
      console.log(catItems);

      $scope.$apply(() => {
        this.state.catItems = catItems;
        this.state.loading = false;
      })
    })

  }

}

const ItemList = {
  bindings: {

  },
  controller: ItemListCtrl,
  template
}

export default ItemList;

