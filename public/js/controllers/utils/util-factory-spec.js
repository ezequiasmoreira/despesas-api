angular.module("despesas").factory("utilFactorySpec", function () {    
	
	let _validarEmail = function (email) { 		 
		let regex = /\S+@\S+\.\S+/;
		if(!regex.test(email)){
			throw "Email inválido";
		}
		return true;
	};
	
	return {
		validarEmail: _validarEmail
	};
});