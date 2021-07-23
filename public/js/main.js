angular.module('despesas', ['ngRoute'])
.config(function($routeProvider){

    $routeProvider.when('/inicio',{
        templateUrl:'pages/visao-geral.html',
        controller: 'DespesasController'
    });

    $routeProvider.otherwise({ redirectTo: '/inicio'});
});