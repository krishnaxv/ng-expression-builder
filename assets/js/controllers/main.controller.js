function MainController($log, LogService) {
  LogService.log(arguments, 'MainController');

  var vm = this;

  vm.isLoading = false;
}

MainController.$inject = ['$log', 'LogService'];

angular
  .module('expressionBuilderApp')
  .controller('MainController', MainController);
