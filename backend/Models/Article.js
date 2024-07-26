const mongoose=require("mongoose")

const BlogSchema=new mongoose.Schema({
    
    title:String,
    adminId:String,
    description:String,
    createdAt:String,
    longdesc:String,
    category:String,
    subCategory:String,
    updatedAt:{
        type:String,
        default:null
    }

    
})

module.exports=mongoose.model("blog",BlogSchema)