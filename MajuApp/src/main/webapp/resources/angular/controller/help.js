angular.module("HelpApp", [])
		.value('urlBase', 'https://app-maju.appspot.com/restFull/park')
//		.value('urlBase', 'http://localhost:8080/restFull/park')
        .controller("ChamadoController", function ($scope, $http, urlBase) {
        	
            var self = this;
            
            self.init = function () {
            	
                self.usuario = 'Diogo Godoi';
//                console.log("testando");
                self.carregarInformacoes();
                self.chart();
                
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

		          			} else if ($scope.umidade && $scope.umidade > 29){
		          				$scope.face = "suando";
			          			$scope.background = "background-bad";
			          			$scope.sugTemperatura = "Temperatura muito alta, cancelar qualquer atividade física."
			          				
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

		          			} else if ($scope.umidade && $scope.umidade > 29){
		          				$scope.face = "suando";
			          			$scope.background = "background-bad";
			          			$scope.sugTemperatura = "Temperatura muito alta, cancelar qualquer atividade física."
			          				
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

		          			} else if ($scope.umidade && $scope.umidade > 29){
		          				$scope.face = "suando";
			          			$scope.background = "background-bad";
			          			$scope.sugTemperatura = "Temperatura muito alta, cancelar qualquer atividade física."
			          				
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

		          			} else if ($scope.umidade && $scope.umidade > 29){
		          				$scope.face = "suando";
			          			$scope.background = "background-bad";
			          			$scope.sugTemperatura = "Temperatura muito alta, cancelar qualquer atividade física."
			          				
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

		          			} else if ($scope.temperatura && $scope.temperatura > 29){
		          				$scope.face = "suando";
			          			$scope.background = "background-bad";
			          			$scope.sugTemperatura = "Temperatura muito alta, cancelar qualquer atividade física."
			          			
		          			}
		          		}
		            });
	        };
	        
	        self.chart = function () {
	        	
        	   $http({
	                method: 'GET',
	                url: urlBase + '/getAll'
	            }).then(
	        	
	        	function successCallback(response) {
	        		
	        		$scope.umidade = response.data.umidade;
	            	$scope.temperatura = response.data.temperatura;
	            	$scope.data = response.data.data;
	            	$scope.hora = response.data.hora;
	            	$scope.chuva = response.data.chuva;
	            	$scope.uv = response.data.uv;
	            	$scope.uvNumber = 1;
	            	$scope.localizacao = response.data.localizacao;
	            	
	            	
	            	if ($scope.temperatura > 29 ){
	            		$scope.colorTemperatura = 'rgba(255, 99, 132, 0.2)';
	            		$scope.borderTemperatura = 'rgba(255, 99, 132, 1)';
	            	} else if($scope.temperatura >= 24 && $scope.temperatura < 26){
	            		$scope.colorTemperatura = 'rgba(180, 229, 154, 1)';
	            		$scope.borderTemperatura = 'rgba(73, 149, 70, 1)';
	            	} else {
	            		$scope.colorTemperatura = 'rgba(255, 206, 86, 0.2)';
	            		$scope.borderTemperatura = 'rgba(255, 206, 86, 1)';
	            	}
	            	
	               	
	            	if ($scope.umidade >= 0 && $scope.umidade <= 49 || $scope.umidade >= 81 && $scope.umidade <= 100){
	            		$scope.colorUmidade = 'rgba(255, 99, 132, 0.2)';
	            		$scope.borderUmidade = 'rgba(255, 99, 132, 1)';
	            	} else if($scope.umidade >= 50 && $scope.umidade <= 80){
	            		$scope.colorUmidade = 'rgba(180, 229, 154, 1)';
	            		$scope.borderUmidade = 'rgba(73, 149, 70, 1)';
	            	} else{
	            		$scope.colorUmidade = 'rgba(255, 206, 86, 0.2)';
	            		$scope.borderUmidade = 'rgba(255, 206, 86, 1)';
	            	}
	            	
	            	
	               	
	            	if ($scope.uvNumber > 5){
	            		$scope.color = 'rgba(255, 99, 132, 0.2)';
	            		$scope.border = 'rgba(255, 99, 132, 1)';
	            	} else if($scope.uvNumber < 3){
	            		$scope.color = 'rgba(180, 229, 154, 1)';
	            		$scope.border = 'rgba(73, 149, 70, 1)';
	            	} else{
	            		$scope.color = 'rgba(255, 206, 86, 0.2)';
	            		$scope.border = 'rgba(255, 206, 86, 1)';
	            	}
	            	           	
	        		
		        	 var ctx = document.getElementById('myChart').getContext('2d');
		                var myChart = new Chart(ctx, {
		                    type: 'bar',
		                    data: {
		                        labels: ['UV', 'Temperatura (ºC)',  'Umidade (%)'],
		                        datasets: [{
		                            label: $scope.localizacao,
		                            data: [$scope.uvNumber, $scope.temperatura, $scope.umidade ],
		                            backgroundColor: [
		                            	$scope.color,
		                            	$scope.colorTemperatura,
		                            	$scope.colorUmidade,
		                            ],
		                            borderColor: [
		                            	$scope.border,
		                            	$scope.borderTemperatura,
		                            	$scope.borderUmidade,
		                            ],
		                            borderWidth: 1
		                        }]
		                    },
		                    options: {
		                        scales: {
		                            yAxes: [{
		                                ticks: {
		                                    beginAtZero: true
		                                }
		                            }]
		                        }
		                    }
		                });
		                
		                var ctx = document.getElementById('myChart2').getContext('2d');
		                var myChart = new Chart(ctx, {
		                    type: 'bar',
		                    data: {
		                        labels: ['UV', 'Temperatura (ºC)',  'Umidade (%)'],
		                        datasets: [{
		                            label: 'Parque Mooca',
		                            data: [1, 25, 70 ],
		                            backgroundColor: [
		                            	'rgba(180, 229, 154, 1)',
		                            	'rgba(180, 229, 154, 1)',
		                            	'rgba(180, 229, 154, 1)',
		                            ],
		                            borderColor: [
		                            	'rgba(73, 149, 70, 1)',
		                            	'rgba(73, 149, 70, 1)',
		                            	'rgba(73, 149, 70, 1)',
		                            ],
		                            borderWidth: 1
		                        }]
		                    },
		                    options: {
		                        scales: {
		                            yAxes: [{
		                                ticks: {
		                                    beginAtZero: true
		                                }
		                            }]
		                        }
		                    }
		                });
		                
		                var ctx = document.getElementById('myChart3').getContext('2d');
		                var myChart = new Chart(ctx, {
		                    type: 'bar',
		                    data: {
		                        labels: ['UV', 'Temperatura (ºC)',  'Umidade (%)'],
		                        datasets: [{
		                            label: 'Parque Ibirapuera',
		                            data: [10, 32, 43 ],
		                            backgroundColor: [
		                            	'rgba(255, 99, 132, 0.2)',
		                            	'rgba(255, 99, 132, 0.2)',
		                            	'rgba(255, 99, 132, 0.2)',
		                            ],
		                            borderColor: [
		                            	'rgba(255, 99, 132, 1)',
		                            	'rgba(255, 99, 132, 1)',
		                            	'rgba(255, 99, 132, 1)',
		                            ],
		                            borderWidth: 1
		                        }]
		                    },
		                    options: {
		                        scales: {
		                            yAxes: [{
		                                ticks: {
		                                    beginAtZero: true
		                                }
		                            }]
		                        }
		                    }
		                });
	        	}
	        	
	        )}
        
	        self.init();
        
});
