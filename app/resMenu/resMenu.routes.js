routes.$inject = ['$stateProvider'];
export default function routes($stateProvider) {
  $stateProvider
  .state('resMenu', {
    url: '/resMenu',
    template: require('./resMenu.html'),
    controller: 'HomeCtrl',
    controllerAs: '$ctrl',
  });
}