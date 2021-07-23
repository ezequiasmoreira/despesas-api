angular.module('despesas').controller('loginController', function($scope,loginFactoryService){
    console.log("passou")
    $scope.login = {};
	$scope.mensagem = '';

		$scope.submeter = function() {            
            loginFactoryService.login($scope.login);		
		};

        $scope.cadastrarUsuario = function() {                      
            loginFactoryService.cadastrar($scope);
        };
});