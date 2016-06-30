/**
 * Created by royto on 30-6-2016.
 */
'use strict';

angular.module('portfolioApp').controller('ProjectCtrl', ['$scope', '$interval', function($scope, $interval) {
  $scope.projectIterator = 0;
  $scope.current = {
    title: 'Multopy',
    image: 'plaatjeMultopy'
  };

  $scope.projects = [
    {
      title: 'Multopy',
      image: 'plaatje'
    }, {
      title: 'Sesam',
      image: 'plaatje2'
    }, {
      title: 'WFPCS',
      image: 'plaatje3'
    }
  ];

  $scope.startCycling = function() {
    $interval(function() {
      $scope.nextProject();
    }, 7000);
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
  $scope.startCycling();

}]);
