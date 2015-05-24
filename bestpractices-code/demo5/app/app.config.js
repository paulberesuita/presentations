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
            .state('dashboard',{
                url: "/dashboard",
                views: {
                    '': {
                        templateUrl: 'app/dashboard/dashboard.html'
                    },
                    'orders@dashboard': {
                        templateUrl: "app/dashboard/orders/orders.html",
                        controller: 'OrdersController'
                    },
                    'projects@dashboard': {
                        templateUrl: "app/dashboard/projects/projects.html",
                        controller: 'ProjectsController'
                    },
                    'todos@dashboard': {
                        templateUrl: "app/dashboard/todos/todos.html",
                        controller: 'TodosController'
                    }
                }
            })
    });

})();