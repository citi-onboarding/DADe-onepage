const keystone = require('keystone');

const { Types } = keystone.Field;

const Members = new keystone.List('Members');

Members.add({
    name: {
      type: Types.Text,
      required: true,
      initial: true,
      index: true,
    },
    role: {
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

Members.register();