const express = require('express');
const app = express();
const db = require('./config/db');
const router = require('./router/index.js');
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.use('/api/v1' , router)




// Connect to the database & start the server

db().then(() => {
    console.log('Connected to the database');
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
}
).catch((err) => {
    console.log(err);
});