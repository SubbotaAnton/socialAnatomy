var app = angular.module('userNavigation', []);

app.controller('userNavigationPanel', ['$scope', function ($scope) {
    $scope.users = {
        1: {
            name: 'nnn'
        },
        2: {
            name: 'nnn2'
        },
        3: {
            name: 'nnn3'
        }
    };
    $scope.current = 1;


    $scope.setCurrent = function (user) {
        console.log(user);
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
