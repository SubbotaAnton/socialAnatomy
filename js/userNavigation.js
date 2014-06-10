var app = angular.module('userNavigation', []);

app.controller('UserNavigationPanel', ['$scope', function ($scope) {
    $scope.users = [
        {
            isCurrent : true,
            name: 'nnn'
        },
        {
            name: 'nnn2'
        },
        {
            name: 'nnn3'
        }
    ];

    $scope.setCurrent = function (user) {
        if (!user.isCurrent) {
            $scope.users.forEach(function (item) {
                if (item.isCurrent) {
                    item.isCurrent = false;
                }
            });
            user.isCurrent = true;
        }
    };
}]);
