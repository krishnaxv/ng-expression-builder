var expressionBuilder = angular
  .module('expression-builder', []);

function ExpressionBlock($log, $compile, LogService) {
  LogService.log(arguments, 'ExpressionBlockDirective');
  return {
    scope: {},
    restrict: 'E',
    transclude: true,
    template: `
      <div class="expression__wrapper" ng-transclude></div>
      <div class="mdl-card__supporting-text">
        <button id="expression--add" class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-js-ripple-effect mdl-button--colored">
          <i class="material-icons">add</i>
        </button>
      </div>
    `,
    link: function($scope, $element, $attrs) {
      componentHandler.upgradeDom();

      var
        element = $element[0],
        randomId,
        // expressionCount = 0,
        // expressionDefaultMarginLeft = 32;  // `px`
        addExpressionElement = document.querySelector('#expression--add'),
        expressionWrapper = angular.element(element.querySelector('.expression__wrapper'));

      addExpressionElement.addEventListener('click', function(event) {
        randomId = '_' + Math.random().toString(36).substr(2, 9);
        expressionWrapper.append($compile('<operator class="operator--margin" identifier="' + randomId + '"></operator><operand class="expression--new-line"></operand>')($scope));
        // expressionCount++;
        // expressionWrapper.append($compile('<operator style="margin-left: ' + (expressionCount * expressionDefaultMarginLeft) + 'px"></operator><operand class="expression--new-line"></operand>')($scope));
      });
    }
  }
}

ExpressionBlock.$inject = ['$log', '$compile', 'LogService'];

/**
 * Expression Builder
 */

expressionBuilder
  .directive('expressionBlock', ExpressionBlock);

function Operand($log, LogService) {
  LogService.log(arguments, 'OperandDirective');
  return {
    scope: {},
    restrict: 'E',
    template: `
      <div class="operand">Operand</div>
    `
  }
}

Operand.$inject = ['$log', 'LogService'];

/**
 * Expression Operand
 */

expressionBuilder
  .directive('operand', Operand);

function Operator($log, $timeout, LogService) {
  LogService.log(arguments, 'OperatorDirective');
  return {
    scope: {
      identifier: '@'
    },
    restrict: 'E',
    template: `
      <div class="operator">
        <button id="{{identifier}}" class="mdl-button mdl-js-button mdl-js-ripple-effect operator">
          Operator
        </button>
        <ul class="mdl-menu mdl-menu--bottom-left mdl-js-menu" for="{{identifier}}">
          <li class="mdl-menu__item">
            <button class="mdl-button mdl-js-button mdl-js-ripple-effect">+</button>
            <button class="mdl-button mdl-js-button mdl-js-ripple-effect">-</button>
            <button class="mdl-button mdl-js-button mdl-js-ripple-effect">*</button>
            <button class="mdl-button mdl-js-button mdl-js-ripple-effect">/</button>
            <button class="mdl-button mdl-js-button mdl-js-ripple-effect">( Brackets )</button>
          </li>
        </ul>
      </div>
    `,
    link: function($scope, $element, $attrs) {
      $timeout(function() {
        componentHandler.upgradeDom();
      });
    }
  }
}

Operator.$inject = ['$log', '$timeout', 'LogService'];

/**
 * Expression Operator
 */

expressionBuilder
  .directive('operator', Operator);
