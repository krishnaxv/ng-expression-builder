function Loader($log) {
  return {
    scope: {
      isLoading: '='
    },
    restrict: 'E',
    template: `
      <div class="mdl-typography--text-center loader" ng-if="isLoading">
        <div class="mdl-spinner mdl-js-spinner is-active"></div>
      </div>
    `
  }
}

Loader.$inject = ['$log'];

angular
  .module('expressionBuilderApp')
  .directive('loader', Loader);
