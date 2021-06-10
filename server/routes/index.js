const path = require('path');
const cors = require('cors');
const postController = require('../controllers/postController');


const organizacaointernaController = require('../controllers/organizacaointernaController');

module.exports = (app) => {
  app.use(cors());

  app.get('/api/posts', postController.getPostController);


  app.get('/api/organizacao-interna', organizacaointernaController.getOrganizacaoInternaController);

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  app.get('*', (req, res) => {
    res.redirect('/');
  });
};