(function(){
	'use strict';

	angular
		.module("myApp")
		.controller("LeaveController",Controller);

		function Controller($http){
			var vm = this;
vm.Details1 = [];

		vm.insertla = function(user) {
        console.log(user)
        $http({
                method: 'post',
                url: "http://0.0.0.0:3000/api/LeaveApplications",
                data: {
                    'emp_id': user.empid,
                    'la_fordata': user.lafd,
                    'leave_applied_on': user.lao,
                    'date_of_return': user.dor,
                    'reason_for_leave': user.rsl,
                    'is_approved': user.ia
                }

            })
            .then(function successCallBack(response) {
                    alert("Data inserted");
                    vm.Details1.push(response.data);
                    console.log(user)
                },

                function errorCallBack(response) {
                    alert("Sorry, Some error occured");
                    console.log(response)
                });
    }


    vm.ladb = function() {
        vm.lag = true;
        vm.flag = false;
        vm.ag = false;
        vm.g = false;
        $http({
                method: 'get',
                url: "http://0.0.0.0:3000/api/LeaveApplications",

            })
            .then(function successCallBack(response) {
                    console.log("success");
                    vm.Details1 = response.data;
                    console.log(response.data)
                },


                function errorCallBack(response) {

                });
    }

    vm.ladelete = function(user) {
        $http({
                method: 'delete',
                url: "http://0.0.0.0:3000/api/LeaveApplications/" + user,

            })
            .then(function successCallBack(response) {

                    for (var i = 0; i < vm.Details1.length; i++) {
                        if (vm.Details1[i].id == user) {
                            vm.Details1.splice(i, 1)
                        }
                    }
                },

                function errorCallBack(response) {

                });
    }








		}


})();