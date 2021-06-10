const keystone = require('keystone');

const { Types } = keystone.Field;

const Member = new keystone.List('Members');

Member.add({
  name: {
    type: Types.Text,
    required: true,
    initial: true,
    index: true,
  },
  role:{
    type: Types.Text,
    required: true,
    initial: true,
    index: true,
  },
  date:{
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

Member.register();