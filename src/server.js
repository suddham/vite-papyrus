const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());
// app.use(express.urlencoded({ extended: true }));

const user = require('./routes/api/user');

app.use('/api/user', user);

// listen on the port
app.listen(port, () => {
    console.log(`listening on ${port}`);
});
