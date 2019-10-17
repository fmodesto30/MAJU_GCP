angular.module("HelpApp", [])
		.value('urlBase', 'https://app-maju.appspot.com/restFull/park')
        .controller("ChamadoController", function ($scope, $http, urlBase) {
        	
            var self = this;
            
            self.init = function () {
            	
                self.usuario = 'Diogo Godoi';
//                console.log("testando");
                self.carregarInformacoes();
                
            }
            
            
	     	 self.carregarInformacoes = function () {
	        	
	            $http({
	                method: 'GET',
	                url: urlBase + '/getAll'
	            }).then(
	            		
		            function successCallback(response) {
		            	console.log(response.data);
		            	$scope.umidade = response.data.umidade;
		            	$scope.temperatura = response.data.temperatura;
		            	$scope.data = response.data.data;
		            	$scope.hora = response.data.hora;
		            	$scope.chuva = response.data.chuva;
		            	$scope.uv = response.data.uv;
		            }, function(response) {
		            });
	        };
        
	        self.init();
        
});
