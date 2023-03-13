const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require ('express-handlebars');
const app = express();
const port = 3000;

//localhost:3000/public/logoUET.png
app.use(express.static(path.join(__dirname, 'public')));
//HTTP logger
app.use(morgan('combined'))

//Template engines
app.engine('hbs', handlebars.engine({
    extname: '.hbs' // Đổi tên đuôi handlebars thành hbs cho ngắn
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
  // res.send('Hello World!')
    res.render('home');
})
//Tao them trang localhost:/news
app.get('/news', (req, res) => {
  // res.send('Hello World!')
    res.render('news');
})

//127.0.0.1 - localhost:3000
//Ctrl C to turn off server
//node index.js to run server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})