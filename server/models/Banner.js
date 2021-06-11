const keystone = require('keystone');

const { Types } = keystone.Field;

const Banner = new keystone.List('Banner', {
  nocreate: true,
  nodelete: true,
});

Banner.add({
  texto_roxo: {
    type: Types.Text,
    required: true,
    initial: true,
    index: true,
  },
  texto_amarelo: {
    type: Types.Text,
    required: true,
    initial: true,
    index: true,
  },
  imagem: {
    type: Types.CloudinaryImages,
    require: true,
  },
});

Banner.register();