const mongoose = require('mongoose');

const noticeSchema = new mongoose.Schema({
    classification : {type:String,required:true},
    des : {type:String,required:true}
},{
    collection : 'SchoolNotice'
},
{
    timestamps:true
}
);


module.exports = mongoose.model('SchoolNotice',noticeSchema);