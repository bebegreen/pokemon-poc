import { catItems } from '../../mockData';

export default class ItemListService {

  constructor() {
    'ngInject'
  }

  getCatItems() {
    return new Promise((resolve, reject) => { 
      setTimeout(() => { 
        resolve(require('../../mockData').catItems.categories); 
      }, 500)
    })
    // return catItems;
  }
}
