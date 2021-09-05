var app = angular.module('b2buser', ['ui.bootstrap']);

app.controller('b2bmodal', function($scope, $uibModal) {

  $scope.open = function() {
    var modalInstance =  $uibModal.open({
      templateUrl: "manageb2b-create-user.html",
      controller: "manageusermodal",
      size: '',
    });
    
    modalInstance.result.then(function(response){
        $scope.result = `${response} button hitted`;
    });
    
  };
})

app.controller('manageusermodal', function($scope, $uibModalInstance) {

  $scope.ok = function(){
    $uibModalInstance.close("Ok");
  }
   
  $scope.cancel = function(){
    $uibModalInstance.dismiss();
  } 
  
});