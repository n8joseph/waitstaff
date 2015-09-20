angular.module('myApp', ['ngMessages'])
	.controller('MyCtrl', function($scope) {
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
				
	});
	
	