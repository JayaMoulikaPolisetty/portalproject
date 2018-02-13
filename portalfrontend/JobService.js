HomeModule.factory("JobService", function($http) {

var BASE_URL = "http://localhost:8089/portalmiddleware"
var jobService = {};

jobService.addJob = function(job) {
    return $http.post(BASE_URL+"/addJob", job);
}

jobService.jobsList = function() {
  return $http.get(BASE_URL+"/jobsList");
}
return jobService;
})
