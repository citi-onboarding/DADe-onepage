const path = require('path');
const cors = require('cors');
const postController = require('../controllers/postController');
const contatoController = require('../controllers/contatoController');

module.exports = (app) => {
  app.use(cors());

  app.get('/api/posts', postController.getPostController);

  app.get('/api/contatos', contatoController.getContatoController);

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  app.get('*', (req, res) => {
    res.redirect('/');
  });
};