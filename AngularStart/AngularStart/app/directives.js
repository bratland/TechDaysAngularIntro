angular.module('app').directive('cake', function () {
    return {
                restrict: 'AEC',
                templateUrl: '/app/cakeTemplate.html',
                scope: { item: '=ngModel' }
        };
    }
);

