const keystone = require('keystone');

const { Types } = keystone.Field;

const Banner = new keystone.List('Banner');

Banner.add({
  purple_text: {
    type: Types.Text,
    required: true,
    initial: true,
    index: true,
  },
  yellow_text: {
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

Banner.register();