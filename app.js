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
		}).when('/error', {
			template : '<p>Error - Page Not Found</p>'
		})
	}])
	.controller('MyCtrl', ['$scope', '$location', function($scope, $location) {
		$scope.meal = {tax: 0, tip: 0};
		$scope.total = {tip: 0, mealcount: 0};
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
			};
		};
		$scope.isActive = function(viewLocation) {
			return viewLocation === $location.path();
		};
		$scope.test = function($rootScope) {
			
		};
				
	}])
	.run(['$rootScope', function ($rootScope) {
		$rootScope.$on('$routeChangeError', function() {
		$location.path('/error')
		})
	}]);
	