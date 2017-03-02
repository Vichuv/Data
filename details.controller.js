(function(){
	'use strict';

	angular
		.module("myApp")
		.controller("DetailsController",Controller);

		function Controller($http){
			var vm = this;
            vm.Details = [];
    

    vm.empdb = function() {
       
        $http({
                            method: 'get',
                url: "http://0.0.0.0:3000/api/Employees",

            })
            .then(function successCallBack(response) {
                    vm.Details = response.data;
                    
                },


                function errorCallBack(response) {

                });
    }

    vm.empdelete = function(user) {
        $http({
                method: 'delete',
                url: "http://0.0.0.0:3000/api/Employees/" + user,

            })
            .then(function successCallBack(response) {

                    for (var i = 0; i < vm.Details.length; i++) {
                        if (vm.Details[i].id == user) {
                            vm.Details.splice(i, 1)
                        }
                    }
                },

                function errorCallBack(response) {

                });
    }



		}


})();