const mongoose = require('mongoose');

const carSchema = mongoose.Schema(
    {

    name: {
        type: String, required: true
    },
    model: {
        type: String, required: true
    },
    color:{
        type:String, required: true
    },
    shifting:{
        type:String, required: true
    },
    year:{
        type:Number, required: true
    }

    }
)

module.exports = mongoose.model("Car", carSchema)
