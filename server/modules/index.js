var express = require("express");
var router = express.Router();
var path = require("path");
var Hero = require("../models/hero");

router.get("/heroes", function(req,res){
    Hero.find({},function(err, animals){
        if(err){
          console.log(err);
        }

        res.send(animals);
    });
});

router.post("/heroes", function(req,res){
  var hero = new Hero({
      alias : req.body.alias,
      first_name : req.body.first_name,
      last_name : req.body.last_name,
      city : req.body.city,
      power_name : req.body.power_name
  });

  hero.save(function(err, hero){
      if(err){
        console.log(err);
      }

      res.send(hero);
  });
});

router.delete("/heroes/:id", function(req,res){

  var heroId = req.params.id;
  Hero.findOneAndRemove({"_id": heroId}, function(err,data){
    if(err){
      console.log(err);
    }
    res.send(data);
  });

});


router.get("/*", function(req,res){
    var file = req.params[0] || "/assets/views/index.html";
    res.sendFile(path.join(__dirname, "../public/", file));
});

module.exports = router;
