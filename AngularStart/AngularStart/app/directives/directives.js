angular.module('app').directive('cake', function () {
    return {
                restrict: 'AEC',
                templateUrl: '/app/views/cakeTemplate.html',
                scope: { item: '=ngModel' }
        };
    }
);

