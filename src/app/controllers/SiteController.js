class SiteController {
    //  [GET] /
    index(req, res) {
        res.render('news');
    }

    //  [GET] /search
    search(req, res) {
        res.send('NEWS DETAIL!!!');
    }
}

module.exports = new SiteController();
