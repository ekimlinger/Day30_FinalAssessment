myApp.factory("HeroService", ["$http", function($http){
    var data = {};

    var getHeroes = function(){
        $http.get("/heroes").then(function(response){
            data.response = response.data;
        });
    };

    var postHero = function(hero){
        $http.post("/heroes", hero).then(function(response){
            getHeroes();
        });
    };

    var deleteHero = function(hero){
        $http.delete("/heroes/" + hero._id).then(function(response){
            console.log("Deleted : ", response.data);
            getHeroes();
        });
    };

    return {
        data : data,
        getHeroes : getHeroes,
        postHero : postHero,
        deleteHero : deleteHero
    };
}]);
