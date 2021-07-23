angular.module("despesas").factory("loginFactoryService", function ($http,config) {
    
	let _login = function (login) {
        
	};
    
    let _cadastrar = function ($scope) {       
		$http.post(config.baseUrl + '/usuario', $scope.usuario)
            .success(function() {
                $scope.usuario = {};
                console.log('usuario cadastrado com sucesso');
            })
            .error(function(erro) {
                console.log(erro);
                console.log( 'Não foi possível cadastrar o usuário');
            })
	};
	
	return {
		login: _login,
        cadastrar: _cadastrar,
	};
});