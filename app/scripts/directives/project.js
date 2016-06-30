/**
 * Created by royto on 30-6-2016.
 */
'use strict';
angular.module('portfolioApp').directive('project', function() {
  return {
    restrict: 'AE',
    replace: 'true',
    templateUrl: 'views/directives/project.html',
    controller: 'ProjectCtrl'
  };
});
