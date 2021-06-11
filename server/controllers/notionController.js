const keystone = require('keystone');

const Notion = keystone.list('Notion');

module.exports = {
  getNotionController(req, res) {
    Notion.model.find((err, data) => {
      if (err) {
        console.log(err);
        res.status(500).send('DB Error');
      } else {
        res.send(data);
      }
    });
  }

}