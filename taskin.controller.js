(function(){
    'use strict';

    angular
        .module("myApp")
        .controller("Taskin",Controller);

        function Controller($http){
            var vm = this;
vm.Details1 = [];

vm.insertet = function(user) {
        console.log(user);
        $http({
                method: 'post',
                url: "http://0.0.0.0:3000/api/EmpTasks",
                data: {
                    'emp_id': user.emp_id,
                    'Name': user.Name,
                    'Designation': user.Designation,
                    'from_date': user.from_date,
                    'due_date': user.due_date,
                    'assigned_by': user.assigned_by
                }

            })
            .then(function successCallBack(response) {
                    alert("Data inserted");
                    // vm.Detailss.push(response.data);
                },

                function errorCallBack(response) {
                    alert("Sorry, Some error occured");
                    console.log(response);
                });
}
}

})();