var express = require("express"); 

var router = express.Router(); 

var burger = require("../models/burgers.js"); 

router.get("/", function(req, res){
  burger.selectAll(function(data){
    var hbsObject = {
      burgers: data
    }; 
    console.log(hbsObject); 
    res.render("index", hbsObject); 
  }); 
}); 

router.post("/api/burgers", function (req, res){
  burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function(result){
    res.json({id: result.insertId}); 
    console.log('firing')
  });
}); 

router.delete("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id; 

  burger.deleteOne(condition, function(result) {
    if(result.changedRows === 0) {
      return res.status(404).end(); 
    }

    else {
      res.status(200).end(); 
    }
  }); 
}); 

router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.updateOne({
    devoured: req.body.devoured
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router; 