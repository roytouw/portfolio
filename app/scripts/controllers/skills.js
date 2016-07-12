/**
 * Created by royto on 10-7-2016.
 */
'use strict';
angular.module('portfolioApp').controller('SkillsCtrl', ['$scope', function($scope) {
  $scope.skillcounter = 1;

  $scope.get_id = function() {
    $scope.skillcounter += 1;
    return $scope.skillcounter;
  };

  $scope.skillset = [
    {
      id: $scope.get_id(),
      title: 'Java',
      experience: 3
    }, {
      id: $scope.get_id(),
      title: 'C++',
      experience: 2
    }, {
      id: $scope.get_id(),
      title: 'HTML5',
      experience: 4
    }, {
      id: $scope.get_id(),
      title: 'CSS3',
      experience: 4
    }
  ];

}]);
