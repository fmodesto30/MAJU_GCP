angular.module("HelpApp", [])
		.value('urlBase', 'https://app-maju.appspot.com/restFull/park')
//		.value('urlBase', 'http://localhost:8080/restFull/park')
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
		            	$scope.localizacao = response.data.localizacao;
		            	
		          		if($scope.uv && $scope.uv == "Baixo" ){
		          			
		          			$scope.face = "feliz";
		          			$scope.background = "background-good";
		          			$scope.sugUV = "Não há necessidade de proteção, mas procure uma sombra nas horas próximas ao meio-dia.";
		          			
		          			if($scope.temperatura && $scope.temperatura >= 24 && $scope.temperatura <= 25){
		          				
	          					if($scope.umidade && $scope.umidade >= 50 && $scope.umidade <= 80){
				          			$scope.sugUmidade = "Umidade boa para prática de exercícios físicos."
		          				} else if ($scope.umidade && $scope.umidade >= 0 && $scope.umidade <= 49 ) {
		          					$scope.face = "suando";
				          			$scope.background = "background-bad";
				          			$scope.sugUmidade = "Umidade muito baixa para prática de exercícios físicos."
		          				} else if ($scope.umidade && $scope.umidade >= 81 && $scope.umidade <= 100 ) {
		          					$scope.face = "suando";
				          			$scope.background = "background-bad";
				          			$scope.sugUmidade = "Umidade muito alta para prática de exercícios físicos."
		          				}
		          				
		          				$scope.sugTemperatura = "Fazer intervalos mais prolongados na sombra, estimular a ingestão de líquidos a cada 15 min."
		          				
		          			} else if ($scope.temperatura && ($scope.temperatura >= 26 && $scope.temperatura <= 29)){
		          				$scope.face = "preocupado";
			          			$scope.background = "background-medium";
			          			
	          					if($scope.umidade && $scope.umidade >= 50 && $scope.umidade <= 80){
				          			$scope.sugUmidade = "Umidade boa para prática de exercícios físicos."
		          				} else if ($scope.umidade && $scope.umidade >= 0 && $scope.umidade <= 49 ) {
		          					$scope.face = "suando";
				          			$scope.background = "background-bad";
				          			$scope.sugUmidade = "Umidade muito baixa para prática de exercícios físicos."
		          				} else if ($scope.umidade && $scope.umidade >= 81 && $scope.umidade <= 100 ) {
		          					$scope.face = "suando";
				          			$scope.background = "background-bad";
				          			$scope.sugUmidade = "Umidade muito alta para prática de exercícios físicos."
		          				}
		          				
			          			
		          			} else if ($scope.temperatura && $scope.temperatura < 24){
		          				$scope.face = "preocupado";
			          			$scope.background = "background-medium";
		          				$scope.sugTemperatura = "Qualquer atividade é permitida. Em atividades prolongadas, observar os sinais iniciais de hipertermia e desidratação."
		          					
		          					if($scope.umidade && $scope.umidade >= 50 && $scope.umidade <= 80){
					          			$scope.sugUmidade = "Umidade boa para prática de exercícios físicos."
			          				} else if ($scope.umidade && $scope.umidade >= 0 && $scope.umidade <= 49 ) {
			          					$scope.face = "suando";
					          			$scope.background = "background-bad";
					          			$scope.sugUmidade = "Umidade muito baixa para prática de exercícios físicos."
			          				} else if ($scope.umidade && $scope.umidade >= 81 && $scope.umidade <= 100 ) {
			          					$scope.face = "suando";
					          			$scope.background = "background-bad";
					          			$scope.sugUmidade = "Umidade muito alta para prática de exercícios físicos."
			          				}

		          			} else if ($scope.temperatura && $scope.umidade > 29){
		          				$scope.face = "suando";
			          			$scope.background = "background-bad";
			          			$scope.sugTemperatura = "Temperatura muito alta, cancelar qualquer atividade atlética."
			          			
		          			}
		          			
		          			
		          		}
		          		
		          		if($scope.uv && $scope.uv == "Moderado" ){
		          			$scope.face = "preocupado";
		          			$scope.background = "background-medium";
		          			$scope.sugUV = "Há necessidade de proteção intensa, vista uma camiseta, utilize óculos de sol, aplique filtro solar e coloque um chapéu.";
		          			
		          			if($scope.temperatura && $scope.temperatura >= 24 && $scope.temperatura <= 25){
		          				
	          					if($scope.umidade && $scope.umidade >= 50 && $scope.umidade <= 80){
				          			$scope.sugUmidade = "Umidade boa para prática de exercícios físicos."
		          				} else if ($scope.umidade && $scope.umidade >= 0 && $scope.umidade <= 49 ) {
		          					$scope.face = "suando";
				          			$scope.background = "background-bad";
				          			$scope.sugUmidade = "Umidade muito baixa para prática de exercícios físicos."
		          				} else if ($scope.umidade && $scope.umidade >= 81 && $scope.umidade <= 100 ) {
		          					$scope.face = "suando";
				          			$scope.background = "background-bad";
				          			$scope.sugUmidade = "Umidade muito alta para prática de exercícios físicos."
		          				}
		          				
		          				$scope.sugTemperatura = "Fazer intervalos mais prolongados na sombra, estimular a ingestão de líquidos a cada 15 min."
		          				
		          			} else if ($scope.temperatura && ($scope.temperatura >= 26 && $scope.temperatura <= 29)){
		          				$scope.face = "preocupado";
			          			$scope.background = "background-medium";
			          			
	          					if($scope.umidade && $scope.umidade >= 50 && $scope.umidade <= 80){
				          			$scope.sugUmidade = "Umidade boa para prática de exercícios físicos."
		          				} else if ($scope.umidade && $scope.umidade >= 0 && $scope.umidade <= 49 ) {
		          					$scope.face = "suando";
				          			$scope.background = "background-bad";
				          			$scope.sugUmidade = "Umidade muito baixa para prática de exercícios físicos."
		          				} else if ($scope.umidade && $scope.umidade >= 81 && $scope.umidade <= 100 ) {
		          					$scope.face = "suando";
				          			$scope.background = "background-bad";
				          			$scope.sugUmidade = "Umidade muito alta para prática de exercícios físicos."
		          				}
		          				
			          			
		          			} else if ($scope.temperatura && $scope.temperatura < 24){
		          				$scope.face = "preocupado";
			          			$scope.background = "background-medium";
		          				$scope.sugTemperatura = "Qualquer atividade é permitida. Em atividades prolongadas, observar os sinais iniciais de hipertermia e desidratação."
		          					
		          					if($scope.umidade && $scope.umidade >= 50 && $scope.umidade <= 80){
					          			$scope.sugUmidade = "Umidade boa para prática de exercícios físicos."
			          				} else if ($scope.umidade && $scope.umidade >= 0 && $scope.umidade <= 49 ) {
			          					$scope.face = "suando";
					          			$scope.background = "background-bad";
					          			$scope.sugUmidade = "Umidade muito baixa para prática de exercícios físicos."
			          				} else if ($scope.umidade && $scope.umidade >= 81 && $scope.umidade <= 100 ) {
			          					$scope.face = "suando";
					          			$scope.background = "background-bad";
					          			$scope.sugUmidade = "Umidade muito alta para prática de exercícios físicos."
			          				}

		          			} else if ($scope.temperatura && $scope.umidade > 29){
		          				$scope.face = "suando";
			          			$scope.background = "background-bad";
			          			$scope.sugTemperatura = "Temperatura muito alta, cancelar qualquer atividade atlética."
			          			
		          			}
		          		}
		          		
		          		if($scope.uv && $scope.uv == "Alto" ){
		          			$scope.face = "preocupado";
		          			$scope.background = "background-medium";
		          			$scope.sugUV = "Há necessidade de proteção intensa, evite se espor no sol nas horas próximas ao meio-dia. Camisa de manga longa, filtro solar, óculos, chapéu e beba bastante água.";
		          			
		          			if($scope.temperatura && $scope.temperatura >= 24 && $scope.temperatura <= 25){
		          				
	          					if($scope.umidade && $scope.umidade >= 50 && $scope.umidade <= 80){
				          			$scope.sugUmidade = "Umidade boa para prática de exercícios físicos."
		          				} else if ($scope.umidade && $scope.umidade >= 0 && $scope.umidade <= 49 ) {
		          					$scope.face = "suando";
				          			$scope.background = "background-bad";
				          			$scope.sugUmidade = "Umidade muito baixa para prática de exercícios físicos."
		          				} else if ($scope.umidade && $scope.umidade >= 81 && $scope.umidade <= 100 ) {
		          					$scope.face = "suando";
				          			$scope.background = "background-bad";
				          			$scope.sugUmidade = "Umidade muito alta para prática de exercícios físicos."
		          				}
		          				
		          				$scope.sugTemperatura = "Fazer intervalos mais prolongados na sombra, estimular a ingestão de líquidos a cada 15 min."
		          				
		          			} else if ($scope.temperatura && ($scope.temperatura >= 26 && $scope.temperatura <= 29)){
		          				$scope.face = "preocupado";
			          			$scope.background = "background-medium";
			          			
	          					if($scope.umidade && $scope.umidade >= 50 && $scope.umidade <= 80){
				          			$scope.sugUmidade = "Umidade boa para prática de exercícios físicos."
		          				} else if ($scope.umidade && $scope.umidade >= 0 && $scope.umidade <= 49 ) {
		          					$scope.face = "suando";
				          			$scope.background = "background-bad";
				          			$scope.sugUmidade = "Umidade muito baixa para prática de exercícios físicos."
		          				} else if ($scope.umidade && $scope.umidade >= 81 && $scope.umidade <= 100 ) {
		          					$scope.face = "suando";
				          			$scope.background = "background-bad";
				          			$scope.sugUmidade = "Umidade muito alta para prática de exercícios físicos."
		          				}
		          				
			          			
		          			} else if ($scope.temperatura && $scope.temperatura < 24){
		          				$scope.face = "preocupado";
			          			$scope.background = "background-medium";
		          				$scope.sugTemperatura = "Qualquer atividade é permitida. Em atividades prolongadas, observar os sinais iniciais de hipertermia e desidratação."
		          					
		          					if($scope.umidade && $scope.umidade >= 50 && $scope.umidade <= 80){
					          			$scope.sugUmidade = "Umidade boa para prática de exercícios físicos."
			          				} else if ($scope.umidade && $scope.umidade >= 0 && $scope.umidade <= 49 ) {
			          					$scope.face = "suando";
					          			$scope.background = "background-bad";
					          			$scope.sugUmidade = "Umidade muito baixa para prática de exercícios físicos."
			          				} else if ($scope.umidade && $scope.umidade >= 81 && $scope.umidade <= 100 ) {
			          					$scope.face = "suando";
					          			$scope.background = "background-bad";
					          			$scope.sugUmidade = "Umidade muito alta para prática de exercícios físicos."
			          				}

		          			} else if ($scope.temperatura && $scope.umidade > 29){
		          				$scope.face = "suando";
			          			$scope.background = "background-bad";
			          			$scope.sugTemperatura = "Temperatura muito alta, cancelar qualquer atividade atlética."
			          			
		          			}
		          		}
		          		
		          		if($scope.uv && $scope.uv == "Muito Alto" ){
		          			$scope.face = "suando";
		          			$scope.background = "background-bad";
		          			$scope.sugUV = "Há necessidade de proteção intensa, evite se espor no sol nas horas próximas ao meio-dia. Camiseta, filtro solar, óculos e beba bastante água.";
		          			
		          			if($scope.temperatura && $scope.temperatura >= 24 && $scope.temperatura <= 25){
		          				
	          					if($scope.umidade && $scope.umidade >= 50 && $scope.umidade <= 80){
				          			$scope.sugUmidade = "Umidade boa para prática de exercícios físicos."
		          				} else if ($scope.umidade && $scope.umidade >= 0 && $scope.umidade <= 49 ) {
		          					$scope.face = "suando";
				          			$scope.background = "background-bad";
				          			$scope.sugUmidade = "Umidade muito baixa para prática de exercícios físicos."
		          				} else if ($scope.umidade && $scope.umidade >= 81 && $scope.umidade <= 100 ) {
		          					$scope.face = "suando";
				          			$scope.background = "background-bad";
				          			$scope.sugUmidade = "Umidade muito alta para prática de exercícios físicos."
		          				}
		          				
		          				$scope.sugTemperatura = "Fazer intervalos mais prolongados na sombra, estimular a ingestão de líquidos a cada 15 min."
		          				
		          			} else if ($scope.temperatura && ($scope.temperatura >= 26 && $scope.temperatura <= 29)){
		          				$scope.face = "preocupado";
			          			$scope.background = "background-medium";
			          			
	          					if($scope.umidade && $scope.umidade >= 50 && $scope.umidade <= 80){
				          			$scope.sugUmidade = "Umidade boa para prática de exercícios físicos."
		          				} else if ($scope.umidade && $scope.umidade >= 0 && $scope.umidade <= 49 ) {
		          					$scope.face = "suando";
				          			$scope.background = "background-bad";
				          			$scope.sugUmidade = "Umidade muito baixa para prática de exercícios físicos."
		          				} else if ($scope.umidade && $scope.umidade >= 81 && $scope.umidade <= 100 ) {
		          					$scope.face = "suando";
				          			$scope.background = "background-bad";
				          			$scope.sugUmidade = "Umidade muito alta para prática de exercícios físicos."
		          				}
		          				
			          			
		          			} else if ($scope.temperatura && $scope.temperatura < 24){
		          				$scope.face = "preocupado";
			          			$scope.background = "background-medium";
		          				$scope.sugTemperatura = "Qualquer atividade é permitida. Em atividades prolongadas, observar os sinais iniciais de hipertermia e desidratação."
		          					
		          					if($scope.umidade && $scope.umidade >= 50 && $scope.umidade <= 80){
					          			$scope.sugUmidade = "Umidade boa para prática de exercícios físicos."
			          				} else if ($scope.umidade && $scope.umidade >= 0 && $scope.umidade <= 49 ) {
			          					$scope.face = "suando";
					          			$scope.background = "background-bad";
					          			$scope.sugUmidade = "Umidade muito baixa para prática de exercícios físicos."
			          				} else if ($scope.umidade && $scope.umidade >= 81 && $scope.umidade <= 100 ) {
			          					$scope.face = "suando";
					          			$scope.background = "background-bad";
					          			$scope.sugUmidade = "Umidade muito alta para prática de exercícios físicos."
			          				}

		          			} else if ($scope.temperatura && $scope.umidade > 29){
		          				$scope.face = "suando";
			          			$scope.background = "background-bad";
			          			$scope.sugTemperatura = "Temperatura muito alta, cancelar qualquer atividade atlética."
			          			
		          			}
		          		}
		          		
		          		if($scope.uv && $scope.uv == "Extremo" ){
		          			$scope.face = "suando";
		          			$scope.background = "background-bad";
		          			$scope.sugUV = "Há necessidade de proteção intensa, evite se espor no sol nas horas próximas ao meio-dia. Camiseta, filtro solar, óculos e beba bastante água.";
		          			
		          			if($scope.temperatura && $scope.temperatura >= 24 && $scope.temperatura <= 25){
		          				
	          					if($scope.umidade && $scope.umidade >= 50 && $scope.umidade <= 80){
				          			$scope.sugUmidade = "Umidade boa para prática de exercícios físicos."
		          				} else if ($scope.umidade && $scope.umidade >= 0 && $scope.umidade <= 49 ) {
		          					$scope.face = "suando";
				          			$scope.background = "background-bad";
				          			$scope.sugUmidade = "Umidade muito baixa para prática de exercícios físicos."
		          				} else if ($scope.umidade && $scope.umidade >= 81 && $scope.umidade <= 100 ) {
		          					$scope.face = "suando";
				          			$scope.background = "background-bad";
				          			$scope.sugUmidade = "Umidade muito alta para prática de exercícios físicos."
		          				}
		          				
		          				$scope.sugTemperatura = "Fazer intervalos mais prolongados na sombra, estimular a ingestão de líquidos a cada 15 min."
		          				
		          			} else if ($scope.temperatura && ($scope.temperatura >= 26 && $scope.temperatura <= 29)){
		          				$scope.face = "preocupado";
			          			$scope.background = "background-medium";
			          			
	          					if($scope.umidade && $scope.umidade >= 50 && $scope.umidade <= 80){
				          			$scope.sugUmidade = "Umidade boa para prática de exercícios físicos."
		          				} else if ($scope.umidade && $scope.umidade >= 0 && $scope.umidade <= 49 ) {
		          					$scope.face = "suando";
				          			$scope.background = "background-bad";
				          			$scope.sugUmidade = "Umidade muito baixa para prática de exercícios físicos."
		          				} else if ($scope.umidade && $scope.umidade >= 81 && $scope.umidade <= 100 ) {
		          					$scope.face = "suando";
				          			$scope.background = "background-bad";
				          			$scope.sugUmidade = "Umidade muito alta para prática de exercícios físicos."
		          				}
		          				
			          			
		          			} else if ($scope.temperatura && $scope.temperatura < 24){
		          				$scope.face = "preocupado";
			          			$scope.background = "background-medium";
		          				$scope.sugTemperatura = "Qualquer atividade é permitida. Em atividades prolongadas, observar os sinais iniciais de hipertermia e desidratação."
		          					
		          					if($scope.umidade && $scope.umidade >= 50 && $scope.umidade <= 80){
					          			$scope.sugUmidade = "Umidade boa para prática de exercícios físicos."
			          				} else if ($scope.umidade && $scope.umidade >= 0 && $scope.umidade <= 49 ) {
			          					$scope.face = "suando";
					          			$scope.background = "background-bad";
					          			$scope.sugUmidade = "Umidade muito baixa para prática de exercícios físicos."
			          				} else if ($scope.umidade && $scope.umidade >= 81 && $scope.umidade <= 100 ) {
			          					$scope.face = "suando";
					          			$scope.background = "background-bad";
					          			$scope.sugUmidade = "Umidade muito alta para prática de exercícios físicos."
			          				}

		          			} else if ($scope.temperatura && $scope.umidade > 29){
		          				$scope.face = "suando";
			          			$scope.background = "background-bad";
			          			$scope.sugTemperatura = "Temperatura muito alta, cancelar qualquer atividade atlética."
			          			
		          			}
		          		}
		            });
	        };
	        
        
	        self.init();
        
});
