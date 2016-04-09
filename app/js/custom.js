(function(){
  angular.module('checkboxDemo1', ['ngMaterial'])
  .controller('checkBoxCtrl', function($scope) {
      $scope.items = [1,2,3,4];

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

//add variable functionality
(function(){
  angular.module('addVariable', ['ngMaterial'])
  .controller('myaddCtrl', function($scope) {

      $scope.customVarList = [
      {
        name : "height",
        descritpion: "",
        device: "Device 1",
        date: "Jul 14, 2013",
        unit: "kg",
        varExpression: "chapmion chapmion"   
      },
      {
        name : "weight",
        descritpion: "value",
        device: "Device 2",
        date: "Jul 18, 2013",
        unit: "m",
        varExpression: "fuck that slut"   
      },
      {
        name : "length",
        descritpion: "value",
        device: "Device 2",
        date: "Jul 20, 2013",
        unit: "lb",
        varExpression: "Suck my dick"   
      },
      {
        name : "breadth",
        descritpion: "value",
        device: "Device 3",
        date: "Jul 22, 2013",
        unit: "g",
        varExpression: "Hahaha"   
      }
      ];

      var indexes = [0];
      var last_index = 0;
      $scope.expression = " ";
      $scope.addToExpression = function(value){
        //$scope.expression += " ";
        $scope.expression += value;
        last_index = ($scope.expression).length;
        indexes.push(last_index-1);
      };

      $scope.backSpace = function(){
        var len_indexes = indexes.length;
        if(len_indexes>1)
        {indexes.pop();}
        len_indexes = indexes.length;
        console.log(indexes);
        var exp = $scope.expression.substring(0, indexes[len_indexes-1]+1);
        

        $scope.expression = exp;
      };

      $scope.clearExpression = function(){
        $scope.expression = "";
        indexes = [0];
        last_index = 0;
      };

      $scope.addVariable = function(){

      }

  });

})();




