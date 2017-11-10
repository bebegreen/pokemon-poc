import angular from 'angular';
import uirouter from 'angular-ui-router';
import dragDrop from 'angular-drag-and-drop-lists';

import routes from './app.routes'
import home from './homePage'
import resMenu from './resMenu'
import './app.scss';

angular.module('ROS', [
  'dndLists',
  uirouter,
  home,
  resMenu
])
  .config(routes)
