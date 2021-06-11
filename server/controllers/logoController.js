const keystone = require('keystone');

const Logo = keystone.list('Logo');

module.exports = {
  getLogoController(req, res) {
    Logo.model.find((err, data) => {
      if (err) {
        console.log(err);
        res.status(500).send('DB Error');
      } else {
        res.send(data);
      }
    });
  }

}