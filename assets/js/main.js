var jazzPort = angular.module('JazzPortfolio', ['ngRoute'], function($routeProvider){
    $routeProvider
    .when('/', {
      templateUrl: 'views/home.html'
    })

    .when('/aboutme', {
      templateUrl: 'views/aboutme.html'
    })

    .when('/portfolio', {
      templateUrl: 'views/portfolio.html'
    })

    .when('/resume', {
      templateUrl: 'views/resume.html'
    })

    .when('/contact', {
      templateUrl: 'views/contact.html'
    })

    .otherwise('/', {
      templateUrl: 'views/home.html'
    })

  }) // END .when routing
