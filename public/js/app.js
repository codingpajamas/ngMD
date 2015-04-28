angular.module('listingApp', ['ngMaterial'])
	.config(function($mdThemingProvider) {
		$mdThemingProvider.theme('default')
			.primaryPalette('teal')
    		.accentPalette('amber');
	})
	.controller('listingCtrl', function($scope, $mdGridLayout){
		
	})