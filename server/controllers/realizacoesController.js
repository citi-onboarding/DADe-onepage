const keystone = require('keystone');

const Realizacoes = keystone.list('Realizacoes');

module.exports = {
  getRealizacoesController(req, res) {
    Realizacoes.model.find((err, data) => {
      if (err) {
        console.log(err);
        res.status(500).send('DB Error');
      } else {
        res.send(data);
      }
    });
  }

}