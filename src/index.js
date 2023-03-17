const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
      const port = 3000;

const route = require('./routes');

const db = require('./config/db');
//Connect to DB
db.connect();
//localhost:3000/public/logoUET.png
app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

//HTTP logger
// app.use(morgan('combined'))

//Template engines
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs', // Đổi tên đuôi handlebars thành hbs cho ngắn
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

//Home, search, contact

//Route init: chuyen toan bo app.get post vao routes/index.js
route(app);

//127.0.0.1 - localhost:3000
//Ctrl C to turn off server
//node index.js to run server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
