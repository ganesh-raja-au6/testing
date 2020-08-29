const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
        trim : true,
        minlength : 4,
        maxlength : 50
    },
    body : {
        type : String,
        required : true,
        trim : true,
        minlength : 30,
        maxlength : 200
    },
    image : {
        data : Buffer,
        contentType : String,
    },
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true
    }
}, {
    timestamps : {
        createdAt : "createdAt",
        updatedAt : "updatedAt"
    }
})

module.exports = mongoose.model('Post', postSchema)