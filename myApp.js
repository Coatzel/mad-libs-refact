


		var app = angular.module("myApp", [])
		.constant('VERSION', 1.1)
		.controller("myCtrl", function(VERSION, $scope) {
			this.version = VERSION;
		  // $scope.myTxt = "You have not yet clicked submit";
		  $scope.myFunc = function () {
		      // $scope.myTxt = "You clicked submit!";
				}
						  });
