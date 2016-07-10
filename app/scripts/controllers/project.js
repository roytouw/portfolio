/**
 * Created by royto on 30-6-2016.
 */
'use strict';

angular.module('portfolioApp').controller('ProjectCtrl', ['$scope', '$interval', function($scope, $interval) {
  $scope.projectIterator = 0;
  $scope.current;

  $scope.projects = [
    {
      title: 'Multopy',
      image: 'images/multopy_screencap.png'
    }, {
      title: 'Sesam',
      image: 'images/sesam_screencap.png'
    }, {
      title: 'WFPCS',
      image: 'images/wfpcs_screencap.png'
    }
  ];

  $scope.startCycling = function() {
    $interval(function() {
      $scope.nextProject();
    }, 10000);
  };

  $scope.nextProject = function() {
    $scope.current = $scope.projects[$scope.iterateProjects()];
  };

  $scope.iterateProjects = function() {
    if($scope.projectIterator + 1 < $scope.projects.length)
      $scope.projectIterator += 1;
    else
      $scope.projectIterator = 0;
    return $scope.projectIterator;
  };
  $scope.nextProject(); //To load the current project with the first project in array.
  $scope.startCycling();

}]);
