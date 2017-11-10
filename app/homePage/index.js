import angular from 'angular'; 
import uirouter from 'angular-ui-router'; 

import routes from './homePage.routes';
import HomeCtrl from './homePage.controller'; 
// import pokemonList from './pokemon-list/pokemon-list.component'
// import PokemonsService from './pokemons.service'

export default angular.module('ROS.home', [uirouter])
  .config(routes)
  .controller('HomeCtrl', HomeCtrl)
  // .component('pokemonList', pokemonList)
  // .service('PokemonsService', PokemonsService)
  .name

  // import ArticleCtrl from './article.controller';
  // articleModule.controller('ArticleCtrl', ArticleCtrl);