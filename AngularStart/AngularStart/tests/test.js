/// <reference path="../Scripts/angular.js" />
/// <reference path="../Scripts/angular-mocks.js" />
/// <reference path="../Scripts/angular-resource.js" />
/// <reference path="../Scripts/angular-animate.js" />
/// <reference path="../Scripts/jasmine.js" />
/// <reference path="../app/angular.js" />


describe('Controllers', function() {

    beforeEach(module('app'));

    //describe("Demo controller", function() {
        var ctrl, scope;

        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            ctrl = $controller('demo', { $scope: scope });
        }));

        it('should have scope defined', function() {
            expect(scope).toBeDefined();
        });

        it('should have 3 items', function() {
            expect(scope.items.length).toBe(3);
        });

        it('Add adds one item ', function () {
            scope.add({ id: 4, name: 'Rolf' });
            expect(scope.items.length).toBe(4);
        });
    });
//});