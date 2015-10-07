angular.module('myApp', ['ngMessages', 'ngRoute'])
	.value('pages', ['home', 'newmeal', 'myearnings'])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/', {
			templateUrl : 'home.html',
			controller : 'MyCtrl as ctrl'
		}).when('/newmeal', {
			templateUrl : 'newmeal.html',
			controller : 'MyCtrl as ctrl'
		}).when('/myearnings', {
			templateUrl : 'myearnings.html',
			controller : 'MyCtrl as ctrl'
		}).otherwise({redirectTo: '/'})
	}])
	
	.controller('rootCtrl', ['$scope', '$location', function($scope, $location) {
		$scope.meal = {tax: 0, tip: 0};
		$scope.total = {tip: 0, mealcount: 0};	
		$scope.isActive = function(viewLocation) {
			return viewLocation === $location.path();
		};
		$scope.test = function() {
			console.log("total meal count: " + $scope.total.mealcount)
			
		};
	}])
	.controller('MyCtrl', ['$scope', '$location', function($scope, $location) {

		$scope.clear = function() {
			$scope.meal.tax = 0;
			$scope.meal.tip = 0;
			$scope.meal.price = "";
		};
		$scope.submit = function() {
			if ($scope.details.$valid) {
				$scope.total.tip += $scope.details.price.$modelValue * $scope.details.tip.$modelValue / 100;
				$scope.total.mealcount += 1;
				$scope.clear();
				$scope.details.$setPristine();
				console.log("total meal count: " + $scope.total.mealcount)
			};
		};
				
	}])

	