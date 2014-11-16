angular.module('app', ['bakery'])
    .controller('BakeryController', ['$scope', 'bakeryService',
        function ($scope, bakeryService) {
            //$scope.items = bakeryService.getPastry();

            $scope.delete = function(itemid) {
                var oldItems = $scope.pastry;
                $scope.pastry = [];
                angular.forEach(oldItems, function(item) {
                    if (item.Id != itemid) $scope.pastry.push(item);
                });
            };

            $scope.pastry = bakeryService.get().success(function(data) {
                $scope.pastry = data;
            } );

        //$scope.add = function(name) {
        //    $scope.items.push({ Id: counter++, name: name });
        //}
    }
    ]);

