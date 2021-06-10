const keystone = require('keystone');

const { Types } = keystone.Field;

const Realizacoes = new keystone.List('Realizacoes');

Realizacoes.add({
  name: {
    type: Types.Text,
    required: true,
    initial: true,
    index: true,
  },
  date: {
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

Realizacoes.register();