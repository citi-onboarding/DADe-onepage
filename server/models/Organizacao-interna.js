const keystone = require('keystone');

const { Types } = keystone.Field;

const organizacaointerna = new keystone.List('organizacao-interna');

organizacaointerna.add({
  text: {
    type: Types.Text,
    required: true,
    initial: true,
    index: true,
  },
  image: {
    type: Types.CloudinaryImages,
    require: true,
  },
});

organizacaointerna.register();