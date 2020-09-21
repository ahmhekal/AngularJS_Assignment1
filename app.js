(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', MsgFnction);

MsgFnction.$inject = ['$scope'];
function MsgFnction($scope) {
  $scope.str ="";
  $scope.msg = ''
  $scope.DisplayMsg = function()
  {
    $scope.msg = CheckIfTooMuch($scope.str);
  }


}

function CheckIfTooMuch (str) {
  var items = str.split(',');
  var itemsCount=items.length;
  if (itemsCount >3)
  {
  return "Too much!"}
  else {
  return "Enjoy!"
  }

}

})();
