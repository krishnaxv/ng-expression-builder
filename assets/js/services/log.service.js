function LogService($log) {
  function log(argsParam, fnCallContext) {
    if (argsParam == undefined) {
      $log.info('Argument parameter missing in LogService.log() method.');
      return;
    }

    var
      fnCallContextMessage1 = fnCallContext != undefined ? fnCallContext + '.' : '',
      fnCallContextMessage2 = fnCallContext != undefined ? ' in ' + fnCallContext : '',
      fnCalleeName = argsParam.callee.name,
      fnExecutionMessage = fnCalleeName == '' ? 'Anonymous function execution' + fnCallContextMessage2 + '.' : fnCallContextMessage1 + fnCalleeName + '()',
      fnArgs = Array.prototype.slice.call(argsParam, 0),
      fnArgsMessage = fnArgs.length == 0 ? 'No arguments available.' : fnArgs;

    $log.info('FnExecution', fnExecutionMessage);
    $log.debug('FnArguments', fnArgsMessage);
  }

  return {
    log: log
  }
}

LogService.$inject = ['$log'];

angular
  .module('expressionBuilderApp')
  .factory('LogService', LogService);
