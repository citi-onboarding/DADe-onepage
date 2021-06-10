const keystone = require('keystone');

const Contato = keystone.list('Contato');

module.exports = {
  getContatoController(req, res) {
    Contato.model.find((err, data) => {
      if (err) {
        console.log(err);
        res.status(500).send('DB Error');
      } else {
        res.send(data);
      }
    });
  }

}