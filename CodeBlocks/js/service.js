angular.module('root.services', [])

.factory('homeService', function ($http, $rootScope) {
    return {
        getClientData: function (clientReference) {
            return $http.get("https://login.caseblocks.com/case_blocks/search?query=client_reference:" + clientReference + "&auth_token=bDm1bzuz38bpauzzZ_-z");
        }
    };
});
