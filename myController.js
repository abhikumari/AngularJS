app.controller("myController", function ($scope, $http) {

 GetAll();
//below code for get data
 function GetAll() {
  $http.get('https://jsonplaceholder.typicode.com/posts')
   .then(function success(response) {
    $scope.employees = response.data;
   });
 }
 //below code for sorting data
 $scope.sort = function (keyname) {
  $scope.sortKey = keyname;
  $scope.reverse = !$scope.reverse;
 }

 $scope.currentPage = 1;
 $scope.pageSize = 5;
//below code to get data in edit box
 $scope.empDetails = {
  id: "",
  userId: "",
  title: "",
  body: ""
 }
 $scope.empGet = function (id) {
  alert(id);
  $http.get('https://jsonplaceholder.typicode.com/posts' + id)
   .then(function (response) {
    $scope.empDetails = response.data;
   });
 }
// below code for update data
 $scope.updateData = function (fromdata) {
  confirm("are you sure, you want to update employee Id:" + fromdata.id);
  $http.put('https://jsonplaceholder.typicode.com/posts', fromdata)
   .then(function () {
     alert("successfully updated");
     GetAll();
    },
    function () {
     alert("failed to update the data")
    });
 }
//below code for delete the data
 $scope.deleteData = function (id) {
  confirm("Do you want to delete record")
  $http.delete('https://jsonplaceholder.typicode.com/posts' + id)
   .then(function (response) {
     $scope.color = "#187A37";
     $scope.status = "Deleted Successfully";

     GetAll()
    },
    function () {
     $scope.color = "red";
     $scope.status = "Failed to delete records";

    });

 }

//below code to insert the data
 $scope.insertEmp = function (employees) {
  alert(employees.id);
  alert(employees.userId);
  alert(employees.title);
  alert(employees.body);
  $http.post('https://jsonplaceholder.typicode.com/posts', employees)
   .then(function (response) {
     alert("Successfully inserted");
     GetAll();
    },
    function () {
     alert("insertion failed");
    });
 }
});
