var myApp = angular.module("myApp", ['ngRoute']);

myApp.config(["$routeProvider", function($routeProvider){
  $routeProvider.
      when("/add", {
          templateUrl: "/assets/views/routes/add.html",
          controller: "AddController"
      }).
      when("/view", {
          templateUrl: "/assets/views/routes/view.html",
          controller: "ViewController"
      }).
      otherwise({
          redirectTo: '/view'
      });
}]);
