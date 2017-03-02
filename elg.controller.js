(function(){
    'use strict';

    angular
        .module("myApp")
        .controller("LogController",Controller);

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


    vm.elgdb = function() {
        vm.ag = true;
        vm.flag = false;
        vm.lag = false;
        vm.g = false;
        $http({
                method: 'get',
                url: "http://0.0.0.0:3000/api/EmpLogs",

            })
            .then(function successCallBack(response) {
                    vm.Details2 = response.data;
                    /*console.log(response.data)*/
                },


                function errorCallBack(response) {

                });
    }

    vm.elgdelete = function(user) {
        $http({
                method: 'delete',
                url: "http://0.0.0.0:3000/api/EmpLogs/" + user,

            })
            .then(function successCallBack(response) {

                    for (var i = 0; i < vm.Details2.length; i++) {
                        if (vm.Details2[i].id == user) {
                            vm.Details2.splice(i, 1)
                        }
                    }
                },

                function errorCallBack(response) {

                });
    }

    }


})();