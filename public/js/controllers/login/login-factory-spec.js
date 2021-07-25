angular.module("despesas").factory("loginFactorySpec", function () {
    
	let _validarSenha = function (usuario) {
        if (usuario.senha != usuario.confirmaSenha){
			throw "Senha não confere";
		}	
		return true;
	};

	let _validarFormulario = function (formulario) { 		 
		return (!formulario.$valid) ? false  : true;
	};

	let _validarEmail = function (email) { 		 
		let regex = /\S+@\S+\.\S+/;
		if(!regex.test(email)){
			throw "Email invalido";
		}
		return true;
	};
	
	return {
		validarSenha: _validarSenha,
		validarFormulario: _validarFormulario,
		validarEmail: _validarEmail
	};
});