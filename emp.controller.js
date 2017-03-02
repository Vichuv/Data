(function(){
	'use strict';

	angular
		.module("myApp")
		.controller("EmpController",Controller);

		function Controller($http){
			var vm = this;
            vm.Details = [];
    

 vm.insertemp = function(user) {
    console.log(user)
        $http({
                method: 'post',
                url: "http://0.0.0.0:3000/api/Employees",
                data: {
                    'Name': user.name,
                    'Designation': user.designation,
                    'Dob': user.dob,
                    'Doj': user.doj
                }

            })
            .then(function successCallBack(response) {
                    alert("Data inserted");
                    vm.Details.push(response.data);
                },

                function errorCallBack(response) {
                    alert("Sorry, Some error occured");
                    console.log(response)
                });
    }

}


})();