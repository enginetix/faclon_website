(function(){
  angular.module('checkboxDemo1', ['ngMaterial'])
  .controller('checkBoxCtrl', function($scope) {
      $scope.items = [1];

      $scope.selected = [];
      $scope.toggle = function (item, list) {
        var idx = list.indexOf(item);
        if (idx > -1) list.splice(idx, 1);
        else list.push(item);
      };
      $scope.exists = function (item, list) {
        return list.indexOf(item) > -1;
      };
      
  });

})();



