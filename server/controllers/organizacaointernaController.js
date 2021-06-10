const keystone = require('keystone');

const OrganizacaoInterna = keystone.list('organizacao-interna');

module.exports = {
  getOrganizacaoInternaController(req, res) {
    OrganizacaoInterna.model.find((err, data) => {
      if (err) {
        console.log(err);
        res.status(500).send('DB Error');
      } else {
        res.send(data);
      }
    });
  }

}