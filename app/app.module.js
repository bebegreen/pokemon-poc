import angular from 'angular';
import uirouter from '@uirouter/angularjs';
import dragDrop from 'angular-drag-and-drop-lists';

import routes from './app.routes'
import home from './homePage'
import dashboard from './dashboard'
import './app.scss';

angular.module('ROS', [
  'dndLists',
  uirouter,
  home,
  dashboard
])
  .config(routes)
