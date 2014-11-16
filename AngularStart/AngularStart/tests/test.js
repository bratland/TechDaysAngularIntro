/// <reference path="../Scripts/angular.js" />
/// <reference path="../Scripts/angular-mocks.js" />
/// <reference path="../Scripts/angular-resource.js" />
/// <reference path="../Scripts/angular-animate.js" />
/// <reference path="../Scripts/jasmine.js" />
/// <reference path="../app/angular.js" />
/// <reference path="../app/bakeryService.js" />


describe('Controllers', function () {

    beforeEach(function () {
            angular.mock.module('bakery', []);
            module('app', ['bakery']);
        }
    );

    it('blah', function () {
        expect({}).toBeDefined();
    });


    describe("Demo controller", function () {
        var ctrl, scope;


        it('blah2', function () {
            expect({}).toBeDefined();
        });

        beforeEach(inject(function ($rootScope, $controller, bakeryService) {
            scope = $rootScope.$new();
            ctrl = $controller('DemoController', { $scope: scope, bakeryService: bakeryService });
        }));

        it('should have scope defined', function () {
            expect(scope).toBeDefined();
        });

        //it('should have 3 items', function() {
        //    expect(scope.items.length).toBe(3);
        //});

        //it('Add adds one item ', function () {
        //    scope.add({ id: 4, name: 'Rolf' });
        //    expect(scope.items.length).toBe(4);
        //});
    });
});

