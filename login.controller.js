(function(){
    'use strict';

    angular
        .module("myApp")
        .controller("Login",Controller);

        function Controller($http){
            var vm = this;
vm.Details2 = [];


vm.insertelg = function(user) {
        $http({
                method: 'post',
                url: "http://0.0.0.0:3000/api/EmpLogs",
                data: {
                    'emp_id': user.emp_id,
                    'date': user.date,
                    'status': user.status
                }

            })
            .then(function successCallBack(response) {
                    alert("Data inserted");
                    vm.Details2.push(response.data);
                },

                function errorCallBack(response) {
                    alert("Sorry, Some error occured");
                    console.log(response);
                });
    }

 }


})();