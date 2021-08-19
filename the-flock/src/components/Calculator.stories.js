import Calculator from './Calculator.vue';

export default {
  title: 'TheFlock/Calculator',
  component: Calculator,
};

const Template = (args, { argTypes }) => ({
  components: { Calculator },
  template: '<calculator/>',
});

export const Primary = Template.bind({});