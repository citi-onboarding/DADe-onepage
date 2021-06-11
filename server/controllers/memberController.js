const keystone = require('keystone');

const Member = keystone.list('Membros');

module.exports = {
  getMemberController(req, res) {
    Member.model.find((err, data) => {
      if (err) {
        console.log(err);
        res.status(500).send('DB Error');
      } else {
        res.send(data);
      }
    });
  }

}