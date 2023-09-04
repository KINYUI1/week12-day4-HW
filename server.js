const express = require('express')
require('dotenv').config()
const connectDB = require('./utils/connectDB')
const Flight = require('./models/flight')
const jsxEngine = require('jsx-view-engine')
const app = express();
const PORT = 3000;

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.set('view engine','jsx')
app.engine('jsx',jsxEngine())


app.get('/',(req,res)=>{
    res.send('Working')
})

app.get('/flights',async (req,res)=>{
    const flights = await Flight.find({}).sort('departs');
    res.render('flight',{
        flights:flights
    })
})

app.get('/new',(req,res)=>{
    res.render('New')
})

app.post('/flight',async (req,res)=>{
    await Flight.create(req.body)
    res.redirect('/flights')
    
})

app.get('/show/:id',async (req,res)=>{
    const {id} = req.params
    const flight = await Flight.findById(id)
    res.render('Show',{
        flight:flight
    });
})

app.post('/show/:id',async (req,res)=>{
    const {id} = req.params
    const flight = await Flight.findById(id)
    flight.destinations.push(req.body)
    await Flight.findByIdAndUpdate(id, flight, {new:true})
    console.log(flight);
    res.redirect(`/show/${id}`)
})

connectDB()
app.listen(PORT,()=>{
    console.log(`Server running at port ${PORT}`);
})