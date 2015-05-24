(function() {

    'use strict';

    // Declare app level module which depends on filters, and services
    angular.module('app').config(function($stateProvider, $urlRouterProvider) {

        console.log("hello");

        //$urlRouterProvider.otherwise("/main");
        //
        //$stateProvider
        //    .state('login', {
        //        url: "/login",
        //        templateUrl: "app/login/login.html",
        //        controller: 'LoginController'
        //    })
        //    .state('main', {
        //        url: "/main",
        //        templateUrl: "app/main/main.html",
        //        controller: 'MainController'
        //    })

        $urlRouterProvider.otherwise("/view1");

        $stateProvider
            .state('view1', {
                url: "/view1",
                templateUrl: "app/html/view1.html",
                controller: 'View1Controller'
            })
            .state('view2', {
                url: "/view2",
                templateUrl: "app/html/view2.html",
                controller: 'View2Controller'
            })



    });

})();