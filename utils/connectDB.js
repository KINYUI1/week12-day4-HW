const mongoose = require('mongoose')
const connectDB = ()=>{
    mongoose.connect(process.env.MONGO_URI)
    const db = mongoose.connection
    db.on('open',()=>{console.log('connected to the db');})
    db.on('close',()=>{console.log('disconnected from the db');})
    db.on('error',()=>{console.log('error connecting to the db');})

}

module.exports = connectDB
