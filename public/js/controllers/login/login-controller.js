angular.module('despesas').controller('loginController', function($scope,loginFactoryService,loginFactorySpec,utilFactorySpec){
    
    $scope.login = {};
	$scope.mensagem = '';

		$scope.submeter = function() {            
            loginFactoryService.login($scope.login);		
		};

        $scope.cadastrarUsuario = function() {             
            try {
                let usuario =  $scope.usuario;

                if (!loginFactorySpec.validarFormulario($scope.formulario)) return;    
                loginFactorySpec.validarSenha($scope)
                utilFactorySpec.validarEmail(usuario.email,$scope);

                loginFactoryService.cadastrar(usuario).then(successCallback, errorCallback);

                function successCallback(response){    
                    window.location.href = '../../index.html'; 
                }
    
                function errorCallback(response){
                    throw "Não foi possível cadastrar o usuário";
                }         

            }catch (exception) {
                $scope.mensagem = exception
                return;
            }           
        };
});