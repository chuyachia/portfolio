const mongodb = require('mongodb').MongoClient,
    config = require('../../../config/config.js');

module.exports = function(app){
    mongodb.connect('mongodb://'+config.username+':'+config.password+'@'+config.host+':'+config.port+'/'+config.db,
    function(err,database){
        if (err) throw new Error('Fail to connect to database');
        console.log('Connected to database');
        var db = database.db(config.db);
        app.get("/data/:type",function(req,res){
            var query = {type:req.params.type};
            db.collection('projects').find(query).toArray(
                function(err,result){
                    if(err) throw new Error('Fail to fetch data from DB');
                    res.send(result);
                }
            )
        });
    })
    
}