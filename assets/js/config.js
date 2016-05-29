function Config($stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider) {
  // $urlMatcherFactoryProvider.caseInsensitive(true);
  $stateProvider
    .state('home', {
      url: '/',
      controller: 'MainController as main',
      templateUrl: 'templates/Home.html'
    });
    $urlRouterProvider.otherwise('/');
}

Config.$inject = ['$stateProvider', '$urlRouterProvider', '$urlMatcherFactoryProvider'];

angular
  .module('expressionBuilderApp')
  .config(Config);
