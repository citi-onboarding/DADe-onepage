const keystone = require('keystone');

const { Types } = keystone.Field;

const Logo = new keystone.List('Logo');

Logo.add({
  image: {
    type: Types.CloudinaryImages,
    require: true,
    initial: true,
  },
});

Logo.register();