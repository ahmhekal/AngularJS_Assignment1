(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', MsgFnction);

MsgFnction.$inject = ['$scope'];
function MsgFnction($scope) {
  $scope.str ="";
  $scope.msg = ''
  $scope.color = 'green';
  $scope.DisplayMsg = function()
  {
    $scope.msg = CheckIfTooMuch($scope.str);
    if ($scope.msg == "Please enter data first"){$scope.color = 'red'}
    else {$scope.color = 'green'};
  };


}

function CheckIfTooMuch (str) {
  var items = str.split(',');
  var itemsFiltered = items.filter(function (i) {
  return i != "";
  });
  var itemsCount=itemsFiltered.length;
  if (itemsCount >3)
  {
  return "Too much!"}
  else if (str=="") {
    return "Please enter data first"}
  else{
  return "Enjoy!"
  }

}

})();
