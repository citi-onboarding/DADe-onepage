const keystone = require('keystone');

const { Types } = keystone.Field;

const Membro = new keystone.List('Membros');

Membro.add({
  nome: {
    type: Types.Text,
    required: true,
    initial: true,
    index: true,
  },
  cargo:{
    type: Types.Text,
    required: true,
    initial: true,
    index: true,
  },
  data_inicial:{
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

Membro.register();