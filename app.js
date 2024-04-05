const express = require('express');
const bodyParser = require('body-parser');
const bookingRoutes =require('./routes/booking');
const sequelize = require('./util/database');
const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));
app.use('/bookings',bookingRoutes);

sequelize.sync().then(()=>{
    app.listen(3000);
}).catch(err => console.log(err));

