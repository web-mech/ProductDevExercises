import Counter from './Counter.vue';

export default {
  title: 'TheFlock/Counter',
  component: Counter,
};

const Template = (args, { argTypes }) => ({
  components: { Counter },
  template: '<counter/>',
});

export const Primary = Template.bind({});