const express = require('express');
const connection = require('./config/db.js');
const cors = require('cors');

const app = express();
connection();

app.use(cors({ credentials: true, origin: true}));
app.options("*", cors());

app.use(express.json({ extended: true}));

const port = process.env.PORT || 4000;

app.use('/api/products', require('./routes/products') );

app.listen(port, () => {
    console.log(`server running on the port ${port}`);
})