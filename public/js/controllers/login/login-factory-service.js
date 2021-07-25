angular.module("despesas").factory("loginFactoryService", function ($http,config) {
    
    let _cadastrar = function (usuario) {   
        return $http.post(config.baseUrl + '/usuario', usuario);  	
	};
	
	return {
        cadastrar: _cadastrar,
	};
});