const React = require("react");

const Show = (props) => {
  const { flight } = props;
  console.log(flight);
  return (
    <div>
        <a href="/flights">Go To Flights Page</a>
      <ul>
        <li>
          <strong>Airline :</strong> {flight.airline}
        </li>
        <li>
          <strong>Flight Number :</strong> {flight.flightNo}
        </li>
        <li>
          <strong>Depature Time and Date :</strong> {flight.departs.toString()}
        </li>
        <li>
          <strong>Depature Airport :</strong> {flight.airport}
        </li>
      </ul>
      <h3>List Of Destinations.</h3>
      <ul>
        {flight.destinations.length > 0 ? (
          <div>
            {flight.destinations.map((one, i) => {
              return (
                <div>
                    <h2>Destination {i + 1}</h2>
                  <li>Destination : {one.airport}</li>
                  <li>Arrival Date/Time: {one.arrival.toString()}</li>
                </div>
              );
            })}
          </div>
        ) : (
          <h2>No Destination</h2>
        )}
      </ul>
      <h2>Add Destination Airport And Arrival Date And Time</h2>
      <form action={`/Show/${flight._id}`} method="POST">
        Destination Airport:
        <select name="airport">
          <option value="AUS">AUS</option>
          <option value="DAL">DAL</option>
          <option value="LAX">LAX</option>
          <option value="SAN">SAN</option>
          <option value="SEA">SEA</option>
        </select>
        <br />
        Arrival Date/Time: <input type="datetime-local" name="arrival" />
        <br />
        <input type="submit" value="Add Destination And Arrival Date/Time" />
      </form>
    </div>
  );
};

module.exports = Show;
