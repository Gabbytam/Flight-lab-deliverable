const dbConfig = require('./config/db.config')


const db = require("./models/index");
const { airport } = require('./models/index');
const Airport = db.airport;
const Flight = db.flight;
const Terminal = db.terminal;
const Passenger = db.passenger;

// db connection
db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

const airport1 = new Airport({
	name: "First Airport",
	country: "US",
	opened: "2020-12-15"
})

// airport1.save()
// console.log("Airport 1 saved", airport1)
// Lets Make and Save our first airport

const flight = new Flight({
  from: 'CDG France',
  to: 'JFK New-York',
  airline: 'American Airlines'
})

flight.save();
console.log('Flight saved', flight);

const flight2 = new Flight({
  from: 'Heathrow UK',
  to: 'JFK New-York',
  airline: 'British Airways'
})

flight2.save();
console.log('Flight 2 saved', flight2);

const airport2 = new Airport({
  name: 'JFK',
	country: 'USA',
	opened: '1990-5-16'
})

airport2.save();
console.log('Airport 2 saved', airport2);

const terminal1 = new Terminal({
  name: 'Terminal 1',
  flights: [{flight, flight2}],
  capacity: 234324
})

terminal1.save();
console.log('terminal 1 saved');

airport1.terminals.push(terminal1);
airport1.save();

console.log('Airport 1 with terminals saved', airport1);

// A flight from CDG France to JFK New-York, USA on American Airlines with no passengers. The name of the flight is "flight1"
// A second flight from Heathrow UK to JFK New-York, USA on British Airways with no passengers. The name of the flight is "flight2"
// An airport called "JFK" in the USA opened on a random date in 1990.
// A terminal called "Terminal 1" pushed to airport1 with a capacity of 234324 and two flights: flight1 and flight2
// Save and console.log all the objects and their children in the console - you should see all objects when node server.js is executed.

//HOW TO PUSH ONE DOCUMENT TO ANOTHER
// person.friends.push(friend);
// person.save(done);

// or

// PersonModel.update(
//     { _id: person._id }, 
//     { $push: { friends: friend } },
//     done
// );