const keystone = require('keystone');

const { Types } = keystone.Field;

const FAQ = new keystone.List('FAQs');

FAQ.add({
  pergunta: {
    type: Types.Text,
    required: true,
    initial: true,
    index: true,
  },
  resposta:{
    type: Types.Text,
    required: true,
    initial: true,
    index: true,
  }
});

FAQ.register();