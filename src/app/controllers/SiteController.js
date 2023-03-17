const Course = require('../models/Course')

class SiteController {
    //  [GET] /
    index(req, res) {
        //return json
        // res.json({
        //     name: "test",
        // });
        // res.render('news');
        //Print data in tab home
        Course.find({})
            .then(courses => res.json(courses))
            .catch(err => {res.status(400).json({error: "ERROR..!!!"})})
    }

    //  [GET] /search
    search(req, res) {
        res.send('NEWS DETAIL!!!');
    }
}

module.exports = new SiteController();
