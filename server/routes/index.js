const path = require('path');
const cors = require('cors');

const postController = require('../controllers/postController');

const contatoController = require('../controllers/contatoController');

const notionController = require('../controllers/notionController')

const memberController = require('../controllers/memberController')

const faqController = require('../controllers/faqController')

const bannerController = require('../controllers/bannerController')

const logoController = require('../controllers/logoController');

const organizacaointernaController = require('../controllers/organizacaointernaController');

const realizacoesController = require('../controllers/realizacoesController');


module.exports = (app) => {
  app.use(cors());

  app.get('/api/contatos', contatoController.getContatoController);

  app.get('/api/realizacoes', realizacoesController.getRealizacoesController);

  app.get('/api/organizacao-interna', organizacaointernaController.getOrganizacaoInternaController);

  app.get('/api/members', memberController.getMemberController);

  app.get('/api/notion', notionController.getNotionController);

  app.get('/api/FAQ', faqController.getFAQController);

  app.get('/api/banner', bannerController.getBannerController);
  
  app.get('/api/logo', logoController.getLogoController);

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  app.get('*', (req, res) => {
    res.redirect('/');
  });
};