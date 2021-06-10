const keystone = require('keystone');

const FAQ = keystone.list('FAQs');

module.exports = {
  getFAQController(req, res) {
    FAQ.model.find((err, data) => {
      if (err) {
        console.log(err);
        res.status(500).send('DB Error');
      } else {
        res.send(data);
      }
    });
  }

}