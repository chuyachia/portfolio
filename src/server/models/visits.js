var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const Visit = new Schema({
    ip:String,
    referrer:String,
    starttime:Date,
    endtime:Date,
    about:[{referrer:String,time:Date}],
    myworks:[{referrer:String,time:Date}],
    contact:[{referrer:String,time:Date}],
    projects:[{name:String,time:Date}],
    links:[{name:String,time:Date}]
});

export default mongoose.model('Visit',Visit);
