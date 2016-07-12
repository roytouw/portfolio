/**
 * Created by royto on 12-7-2016.
 */

'use strict';
angular.module('portfolioApp').directive('skill', function() {
  return {
    restrict: 'AE',
    replace: 'true',
    templateUrl: 'views/directives/skill.html',
    controller: 'SkillsCtrl'
  };
});
