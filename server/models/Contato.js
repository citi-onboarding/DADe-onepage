const keystone = require('keystone');

const { Types } = keystone.Field;

const Contato= new keystone.List('Contato', {nocreate: true, nodelete: true});

Contato.add({
  instagram: {
    type: Types.Text,
    required: true,
    initial: true,
    index: true,
  },
  twitter: {
    type: Types.Text,
    required: true,
    initial: true,
    index: true,
  },
  email: {
    type: Types.Text,
    required: true,
    initial: true,
    index: true,
  },
  telegram: {
    type: Types.Text,
    required: true,
    initial: true,
    index: true,
  },
  whatsapp: {
    type: Types.Text,
    required: true,
    initial: true,
    index: true,
  },
});

Contato.register();