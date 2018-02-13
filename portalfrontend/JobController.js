HomeModule.controller("JobController", function($scope, $location, $rootScope,$cookieStore,$filter, JobService) {

  $scope.job = {}
  $scope.addJob = function()
  {
    console.log($scope.job)
    $scope.job.postedBy = $rootScope.userdetails.username;
    JobService.addJob($scope.job).then(function(response){
      $scope.job = null;
      console.log(response.data)
    },function(response) {
      console.log(response.data)
    })
  }

  $scope.jobsList = function() {
    JobService.jobsList().then(function(response){
      console.log(response.data)
      $scope.jobs = response.data
    }),function(response) {
      console.log(response.data)
    }


  }

})
