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
      experience: 60,
      hover: 'Experienced'
    }, {
      id: $scope.get_id(),
      title: 'C++',
      experience: 40,
      hover: 'Novice'
    }, {
      title: 'Python',
      experience: 50
    }, {
      id: $scope.get_id(),
      title: 'HTML5',
      experience: 70,
      hover: 'Advanced'
    }, {
      id: $scope.get_id(),
      title: 'CSS3',
      experience: 60
    }, {
      title: 'AngularJS',
      experience: 70
    }, {
      title: 'MVC',
      experience: 80
    }, {
      id: $scope.get_id(),
      title: 'GIT',
      experience: 40
    }, {
      id: $scope.get_id(),
      title: 'Yeoman',
      experience: 30
    }, {
      id: $scope.get_id(),
      title: 'Bower',
      experience: 70,
      hover: 'Know some stuff.'
    }, {
      id: $scope.get_id(),
      title: 'Pokémon',
      experience: 100,
      hover: 'Master'
    }
  ];

  $scope.half = Math.ceil($scope.skillset.length / 2);

}]);
