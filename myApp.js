


		var app = angular.module("myApp", []).constant('VERSION', 1.1)
		app.controller("myCtrl", function(VERSION,$scope) {

			this.version=VERSION;



			console.log($scope);
		  $scope.myTxt = "You have not yet clicked submit";

			$scope.myFunc = function () {
		      $scope.myTxt = "You clicked submit!";
					}



		  $scope.clearForm = function (){
					$scope.sound =null;
					$scope.verbing=null;
					$scope.oof=null;
					$scope.body=null;
					$scope.adj=null;
					$scope.name=null;
					$scope.number=null;
					$scope.fruit=null;
					$scope.rhyme1=null;
					$scope.rhyme2=null;
					$scope.organ=null;
					$scope.myth=null;
					$scope.doom=null;

			};

			  });
