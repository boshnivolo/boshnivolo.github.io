jazzPort.controller('submitFormController', ['$http', '$scope', function($http, $scope){

  // Testing to see if the controller is in the page
  console.log("You there?");

  // New contact model
  $scope.newContact = { };

  // Submits form data to firebase API
  $scope.submitContact = function(){
    console.log($scope.newContact);
    // $http.post("https://jasminebaik.firebaseio.com/messages/message", $scope.newContact).then(function(err){
    //   // Server call failed
    //   console.log(err);
    // });

    // Clears form after submitting
    $scope.newContact = { };
  };

}]); // END submitFormController
