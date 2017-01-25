angular.module('root.controllers', [])

.controller('rootCtrl', function ($scope, $rootScope) {
})

.controller('homeCtrl', function ($scope, $rootScope, $state, $stateParams, homeService) {
    $scope.doSearch = function () {
        homeService.getClientData($scope.clientReference).then(function (response) {
            $scope.mHome = response.data;
        }, function (response) {
        });
    };
});