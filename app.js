var app = angular
 .module("myModule", [
    'ngRoute',
    'ui.bootstrap'
   ])
 //below code to route
 .config(function ($routeProvider) {
  $routeProvider
   .when("/employees/:id", {
    templateUrl: "post.html",
    controller: "postController"
   })
 })
 // below is controller of router
 .controller("postController", function ($scope, $http, $routeParams) {
  $http({
    url: "https://jsonplaceholder.typicode.com/posts",
    params: {
     id: $routeParams.id
    },
    method: "get"
   })
   .then(function success(response) {
    $scope.post = response.data;
   })
 })
 //filter for pagination
 .filter('startFrom', function () {
  return function (data, start) {
   return data.slice(start);
  }
 });
