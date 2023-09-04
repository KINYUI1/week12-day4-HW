const mongoose = require('mongoose')
// const Destinations = require("./distination")

const destinationSchema = new mongoose.Schema({
    airport :{type: String , enum: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA']},
    arrival :{type: Date},
})

const aYearFromNow = new Date();
aYearFromNow.setFullYear(aYearFromNow.getFullYear() + 1);

const flightSchema = new mongoose.Schema({
    airline :{type:String,enum:['American','Southwest','United']},
    flightNo :{type:Number,max:9999, min:10},
    departs :{type: Date, default: aYearFromNow},
    airport :{type:String, enum:['AUS', 'DAL', 'LAX', 'SAN','SEA']},
    destinations :[destinationSchema]
})

const Flight = mongoose.model('Flight',flightSchema)
module.exports = Flight;