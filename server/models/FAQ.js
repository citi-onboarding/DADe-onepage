const keystone = require('keystone');

const { Types } = keystone.Field;

const FAQ = new keystone.List('FAQs');

FAQ.add({
  question: {
    type: Types.Text,
    required: true,
    initial: true,
    index: true,
  },
  answer:{
    type: Types.Text,
    required: true,
    initial: true,
    index: true,
  }
});

FAQ.register();