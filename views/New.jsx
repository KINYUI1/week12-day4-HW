const React = require("react");

const New = () => {
  return (
    <main>
      <form action="/flight" method="POST">
        Airline:
        <select name="airline">
          <option value="American">American</option>
          <option value="Southwest">Southwest</option>
          <option value="United">United</option>
        </select>
        <br />
        FlightNo: <input type="number" name="flightNo" />
        <br />
        Departs: <input type="datetime-local" name="departs" />
        <br />
        Airport: <select name="airport">
            <option value="AUS">AUS</option>
            <option value="DAL">DAL</option>
            <option value="LAX">LAX</option>
            <option value="SAN">SAN</option>
            <option value="SEA">SEA</option>
        </select><br />
        <input type="submit" value="Add new flight" />
      </form>
    </main>
  );
};

module.exports = New;
