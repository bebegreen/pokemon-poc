routes.$inject = ['$stateProvider'];
export default function routes($stateProvider) {
  $stateProvider
  .state('home', {
    url: '/',
    template: require('./homePage.html')
  });
}

