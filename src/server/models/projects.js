var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const Project = new Schema({
    order:Number,
    title:String,
    desc:String,
    url_app:String,
    url_code: String,
    url_img: String,
    type: String,
    techs: [String]
})

export default mongoose.model('Project',Project);
