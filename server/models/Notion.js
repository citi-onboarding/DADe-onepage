const keystone = require('keystone');

const { Types } = keystone.Field;

const Notion = new keystone.List('Notion',{
  nocreate: true,
});

Notion.add({
  link: {
    type: Types.Text,
    required: true,
    initial: true,
    index: true,
  },
});

Notion.register();