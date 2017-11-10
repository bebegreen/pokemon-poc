import angular from 'angular';
import uirouter from 'angular-ui-router';
import ItemList from './itemList/itemList.component';
import Item from './item/item.component';
import PrintingPriority from './printingPriority/printingPriority.component';
import DropZone from './dropZone/dropZone.component';
import ItemListService from './itemList/itemList.service';
import './resMenu.scss'; 

import routes from './resMenu.routes';




export default angular.module('ROS.resMenu', [uirouter])
  .config(routes)
  .component('itemList', ItemList)
  .component('item', Item)
  .component('printingPriority', PrintingPriority)
  .component('dropZone', DropZone)
  .service('itemListService', ItemListService)
  .name
