import Todo from './Todo.vue';

export default {
  title: 'TheFlock/Todo',
  component: Todo,
};

const Template = (args, { argTypes }) => ({
  components: { Todo },
  template: '<todo/>',
});

export const Primary = Template.bind({});