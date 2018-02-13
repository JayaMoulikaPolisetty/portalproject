HomeModule.controller("JobController", function($scope, $location, $rootScope,$cookieStore,$filter, JobService) {
  if($cookieStore.get('job')!=null)
  {
    $rootScope.jobContent=$cookieStore.get('job');
  }
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

  $scope.jobDescription = function(id){
    console.log($scope.jobs)
    var jobData = $filter('filter')($scope.jobs, {jobId: id},true)[0];
    console.log(jobData);
    $cookieStore.put('job', jobData);
    $rootScope.jobContent = $cookieStore.get('job');
    $location.path("/jobDescription")
  }

})
