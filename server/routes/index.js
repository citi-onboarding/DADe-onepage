const path = require('path');
const cors = require('cors');
const postController = require('../controllers/postController');



const realizacoesController = require('../controllers/realizacoesController');

module.exports = (app) => {
  app.use(cors());

  app.get('/api/posts', postController.getPostController);



  app.get('/api/realizacoes', realizacoesController.getRealizacoesController);

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  app.get('*', (req, res) => {
    res.redirect('/');
  });
};