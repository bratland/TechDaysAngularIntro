angular.module('bakery', [])
    .service('bakeryService', function ($http) {
        this.get = function () {
            return $http({ method: 'get', url: 'http://bakeryapi.azurewebsites.net/api/pastry/' });
            return [
                { "Id": 1, "Name": "Morotskaka", "Description": "A scrumptious mini-carrot cake encrusted with sliced almonds", "ImageName": "carrot_cake.jpg", "Price": 9.0 },
                { "Id": 2, "Name": "Citrontårta", "Description": "A delicious lemon tart with fresh meringue cooked to perfection", "ImageName": "lemon_tart.jpg", "Price": 10.0 },
                { "Id": 3, "Name": "Cupcakes", "Description": "Delectable vanilla and chocolate cupcakes", "ImageName": "cupcakes.jpg", "Price": 6.0 },
                { "Id": 4, "Name": "Bröd", "Description": "Fresh baked French-style bread", "ImageName": "bread.jpg", "Price": 1.0 },
                { "Id": 5, "Name": "Pärontårta", "Description": "A glazed pear tart topped with sliced almonds and a dash of cinnamon", "ImageName": "pear_tart.jpg", "Price": 6.0 },
                { "Id": 6, "Name": "Chokladkaka", "Description": "Rich chocolate frosting cover this chocolate lover’s dream.", "ImageName": "chocolate_cake.jpg", "Price": 9.0 }];
        };
    });

angular.module.factory('cakeService', ['$http', cakeService]);
function cakeService($http) {
    var url = 'http://bakeryapi.azurewebsites.net/api/pastry/';
    var service = {
        get: function () {
            return $http({ method: 'get', url: url });
        }
    };

    return service;
}