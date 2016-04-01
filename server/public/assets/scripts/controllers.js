myApp.controller("ViewController", ["$scope", "HeroService", function($scope, HeroService){
    HeroService.getHeroes();
    console.log(HeroService.data);
    $scope.heroesList = HeroService.data;

    $scope.deleteHero = function(hero){
        console.log("Deleting (in controller): ", hero);
        HeroService.deleteHero(hero);
    };
}]);


myApp.controller("AddController", ["$scope", "HeroService", function($scope, HeroService){


    $scope.power_name = ['Invisibility', 'Flight', 'Super Speed', 'Heat Vision', 'Super Strength', 'Accelerated Healing', 'Power Blast', 'Animal Affinity'];

    $scope.submit = function(hero){
        console.log("Adding: ", hero);
        HeroService.postHero(hero);
        $scope.hero = {};
    };
}]);
