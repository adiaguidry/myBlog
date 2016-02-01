var blog = angular.module('mainApp', ['ngRoute', 'firebase'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'pages/home.html',
                controller: 'homeCtrl'
            })
            .when('/blog', {
                templateUrl: 'pages/blog.html',
                controller: 'blogCtrl'
            })
            .when('/create', {
                templateUrl: 'pages/create.html',
                controller: 'createCtrl'
            })
            .otherwise('/')

    })
blog.controller('homeCtrl',['$scope', '$log', '$firebaseArray', 'myblog', function ($scope, $log, $firebaseArray, myblog) {
    $scope.blog_array = myblog.blog_array;



}])
blog.controller('blogCtrl',['$scope', '$log','$firebaseArray', 'myblog', function ($scope, $log, $firebaseArray, myblog) {
   $scope.blogs = myblog.blogs;
    $scope.deleteBlog=myblog.deleteBlog;
    $scope.editing = false;
    $scope.edit = "edit";

}])
blog.controller('createCtrl', ['$scope', 'myblog', function ($scope,  myblog) {
        $scope.createBlog = myblog.createBlog;
        $scope.clear = function(){
            $scope.blog={};
        }

}])
