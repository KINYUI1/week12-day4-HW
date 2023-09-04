const React = require('react')

const Index = (props)=>{
const {flights} = props 
    return <div>
        <a href='/new'>Add more flights</a>
        <h2>Flights</h2>
        <ul>{flights.map((flight)=>{
            return<li>{flight.airline} airline flight {flight.flightNo} departs at {flight.departs.toString()}<a href={`/show/${flight._id}`}>Details</a></li>
        })}</ul>
    </div>

}
module.exports = Index;