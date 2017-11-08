const express = require('express')
const router = express.Router();
const models = require('../model/index.js');

router.post('/save', function (req, res) {
	var newName = new models();
	newName.id=req.body.id;
	newName.Firstname=req.body.Firstname;
	newName.Lastname=req.body.Lastname;
	newName.save();
	res.send("completed posting inside the collection")
});

router.get('/view', function (req, res) {
	models.find({},function(err,name){
		if(err){
			res.send(err);
			console.log("there is an error please check the data...!! [*] err: ", err);
		}
		else{
			res.send(name);
		}
	});
});

router.patch('/update',function(req,res){
	models.update({id:req.body.id},{Firstname:req.body.Firstname},{Lastname:req.body.Lastname},function(err){
		if(err){
			res.send("error in updating the given data [*] err: ",err);
		}else{
			res.send("successfully updated the given data");
		}

	})
})

module.exports = router;
