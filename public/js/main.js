angular.module('despesas', ['ngRoute'])
.config(function($routeProvider){

    $routeProvider.when('/inicio',{
        templateUrl:'partials/visao-geral.html',
        controller: 'DespesasController'
    });

    
    $routeProvider.when('/despesas',{
        templateUrl:'partials/visao-geral.html',
        controller: 'DespesasController'
    });

    $routeProvider.otherwise({ redirectTo: '/inicio'});
});