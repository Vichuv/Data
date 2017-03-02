(function(){
    'use strict';

    angular
        .module("myApp")
        .controller("TaskController",Controller);

        function Controller($http){
            var vm = this;
vm.Details1 = [];


    vm.etdb = function() {
        vm.g = true;
        vm.ag = false;
        vm.flag = false;
        vm.lag = false;
        $http({
                method: 'get',
                url: "http://0.0.0.0:3000/api/EmpTasks",

            })
            .then(function successCallBack(response) {
                    vm.Detailss = response.data;
                    /*console.log(response.data)*/
                },


                function errorCallBack(response) {

                });
    }

    vm.etdelete = function(user) {
        $http({
                method: 'delete',
                url: "http://0.0.0.0:3000/api/EmpTasks/" + user,

            })
            .then(function successCallBack(response) {

                    for (var i = 0; i < vm.Detailss.length; i++) {
                        if (vm.Detailss[i].id == user) {
                            vm.Detailss.splice(i, 1)
                        }
                    }
                },

                function errorCallBack(response) {

                });
    }

    }


})();