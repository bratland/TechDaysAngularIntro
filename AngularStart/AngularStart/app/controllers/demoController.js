angular.module('app', ['bakery'])
    .controller('DemoController', ['$scope', 'bakeryService',
        function ($scope, bakeryService) {

            $scope.delete = function (itemid) {
                var oldItems = $scope.pastry;
                $scope.pastry = [];
                angular.forEach(oldItems, function (item) {
                    if (item.Id != itemid) $scope.pastry.push(item);
                });
            };

            $scope.pastry = [];

            bakeryService.get().success(function (data) {
                $scope.pastry = data;
            });
        }
    ]);