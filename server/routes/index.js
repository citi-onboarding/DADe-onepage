const path = require('path');
const cors = require('cors');
const postController = require('../controllers/postController');

const logoController = require('../controllers/logoController');

module.exports = (app) => {
  app.use(cors());

  app.get('/api/posts', postController.getPostController);

  
  app.get('/api/logo', logoController.getLogoController);

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  app.get('*', (req, res) => {
    res.redirect('/');
  });
};