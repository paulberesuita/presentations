(function() {

    'use strict';

    // Declare app level module which depends on filters, and services
    angular.module('app').config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/login");

        $stateProvider
            .state('login', {
                url: "/login",
                templateUrl: "app/login/partials/login.html",
                controller: 'LoginController'
            })
            .state('dashboard', {
                url: "/dashboard",
                templateUrl: "app/dashboard/partials/dashboard.html",
                controller: 'DashboardController'
            })



    });

})();