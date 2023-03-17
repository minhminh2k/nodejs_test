const newsRouter = require('./news');
const siteRouter = require('./site');

function route(app) {
    //Tao them trang localhost:/news
    app.use('/news', newsRouter);

    app.use('/', siteRouter);
}

module.exports = route;
