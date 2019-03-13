const express = require('express'),
  cors = require('cors'),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose');

var User = require('./models/User');
var Car = require('./models/Car');
var RegisteredCar = require('./models/RegisteredCar');

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://mongodb/v-api', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', () => {
  console.log('MongoDB database connection established successfully!');
});

app.use('/', router);

app.listen(3000, () => console.log(`Express server running on port 3000`));

// Create demo cars.
router.route('/create-cars').get((req, res) => {
  var calls = [];
  [{
    plateNumber: 'AA 00 00 01',
    brand: 'VW',
    type: 'Polo'
  },
  {
    plateNumber: 'AA 00 00 02',
    brand: 'VW',
    type: 'Polo'
  }, {
    plateNumber: 'AA 00 00 03',
    brand: 'VW',
    type: 'Polo'
  }, {
    plateNumber: 'AA 00 00 04',
    brand: 'VW',
    type: 'Polo'
  }].forEach((car => {
    let registeredCar = new RegisteredCar(car);
    calls.push(registeredCar.save());
  }));
  // Fire calls and wait.
  Promise.all(calls).then(() => res.send('All good'));
});

// Cleanup!
router.route('/delete').get((req, res) => {
  Promise.all([User.deleteMany({}, (err, state) => {
    if (err)
      console.log(err);
    else
      return true;
  })],
  [Car.deleteMany({}, (err, state) => {
    if (err)
      console.log(err);
    else
      return true;
  })],
  [RegisteredCar.deleteMany({}, (err, state) => {
    if (err)
      console.log(err);
    else
      return true;
  })]).then(() => res.send('All good'));
});

// List cars.
router.route('/registered-cars').get((req, res) => {
  RegisteredCar.find((err, cars) => {
    if (err)
      console.log(err);
    else
      res.json(cars);
  });
});

// Find registeredCar based on plateNumber.
router.route('/registered-cars/:plateNumber').get((req, res) => {
  RegisteredCar.findOne({'plateNumber': req.params.plateNumber}, (err, registeredCar) => {
    if (err)
      console.log(err);
    else
      res.json(registeredCar);
  })
});

// Register user.
router.route('/register/user').post((req, res) => {
  let user = new User(req.body);
  user.save()
    .then(newUser => {
      res.status(200).json({'user': newUser});
    })
    .catch(err => {
      res.status(400).send('Failed to create new record');
    });
});

// Register car.
router.route('/register/car').post((req, res) => {
  let car = new Car(req.body);
  car.save()
    .then(newCar => {
      res.status(200).json({'car': newCar});
    })
    .catch(err => {
      res.status(400).send('Failed to create new record');
    });
});

// List user and car based on e-mail.
router.route('/user/:email').get((req, res) => {
  User.findOne({'email': req.params.email}, (err, user) => {
    if (err)
      console.log(err);
    else
      res.json(user);
  });
});

// List all users.
router.route('/user').get((req, res) => {
  User.find((err, users) => {
    if (err)
      console.log(err);
    else
      res.json(users);
  });
});