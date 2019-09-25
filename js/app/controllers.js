angular.module("meuModulo")
.controller("indexController", function($scope) {
		$scope.titulo = "Home";
		$scope.alunos = [
			{nome: "Camila", email: "camila@email.com", nota1: 65, nota2: 80, nota3: 55},
			{nome: "Pedro", email: "pedro@email.com", nota1: 60, nota2: 60, nota3: 70},
			{nome: "Murilo", email: "murilo@email.com", nota1: 80, nota2: 95, nota3: 75},
			{nome: "João", email: "joao@email.com", nota1: 85, nota2: 55, nota3: 90},
			{nome: "Ana", email: "ana@email.com", nota1: 95, nota2: 100, nota3: 60},
		];

		var init = function(){
			$scope.alunos.forEach(function(aluno) {
				aluno.media = media(aluno);
			});  
			limpaForm();
		};

		var contar = 0;
		var media = function(Aluno) {
			console.log(contar++);
			var media = (parseFloat(Aluno.nota1) + parseFloat(Aluno.nota2) + parseFloat(Aluno.nota3)) / 3;
			return media.toFixed(2);
		};

		$scope.abreAddAluno = function() {
			$scope.editando = false;
			limpaForm();
			$('#modal1').openModal();
		};

		$scope.addAluno = function(Aluno) {
			Aluno.media = media(Aluno);
			$scope.alunos.push(Aluno);
			$('#modal1').closeModal();
			limpaForm();
		};

		$scope.editando = false;
		var alunoEditar;

		$scope.editarAluno = function(Aluno) {
			$scope.editando = true;
			angular.copy(Aluno, $scope.Aluno);
			$('#modal1').openModal();
			alunoEditar = Aluno;
		};

		$scope.salvarAluno = function(Aluno){
			alunoEditar.nome = Aluno.nome;
			alunoEditar.email = Aluno.email;
			alunoEditar.nota1 = Aluno.nota1;
			alunoEditar.nota2 = Aluno.nota2;
			alunoEditar.nota3 = Aluno.nota3;
			alunoEditar.media = media(Aluno);
			$('#modal1').closeModal();
		};

		$scope.deletarAluno = function(Aluno){
			for (var index in $scope.alunos) {
				var aux = $scope.alunos[index];
				if (Aluno === aux) {
					$scope.alunos.splice(index, 1);
				}
			}
		};

		var limpaForm = function() {
			$scope.Aluno = {nome: "", email: "", nota1: '', nota2: '', nota3: '', media: ''};
		};

		// var contar = 0;
		// $scope.media = function(Aluno) {
		// 	console.log(contar++);
		// 	var media = (Aluno.nota1 + Aluno.nota2 + Aluno.nota3) / 3;
		// 	return media.toFixed(2);
		// };

		init();

	})

.controller("contatoController", function($scope) {
	$scope.titulo = "Contato";
})
