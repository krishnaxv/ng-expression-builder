function Run($rootScope, $timeout) {
  $rootScope.$on('$viewContentLoaded', function() {
    $timeout(function() {
      componentHandler.upgradeAllRegistered();
    });
  });
  // angular.element(document).ready(function() {
  //   componentHandler.upgradeAllRegistered();
  // });
}

Run.$inject = ['$rootScope', '$timeout'];

angular
  .module('expressionBuilderApp')
  .run(Run);
