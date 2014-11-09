var test = 1;

angular.module('app', ['ngAnimate'])

  .controller('demo', ['$scope', function ($scope) {
    var counter = 4;

      $scope.items = [{ id: 1, name: 'Anders' }, { id: 2, name: 'Mikael' }, { id: 3, name: 'Olle' }];

      $scope.delete = function (itemid) {
          var oldItems = $scope.items;
          $scope.items = [];
          angular.forEach(oldItems, function (item) {
              if (item.id != itemid) $scope.items.push(item);
          });
      };

      $scope.add = function (name) {
          $scope.items.push({ id: counter++, name: name });
      }
  }]);