import { ComponentMeta, ComponentStory } from '@storybook/react';
import Translate, { ITranslate } from './Translate';
import { mockTranslateProps } from './Translate.mocks';

export default {
  title: 'trainings/Translate',
  component: Translate,
  argTypes: {},
} as ComponentMeta<typeof Translate>;

const Template: ComponentStory<typeof Translate> = (args) => (
  <Translate {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockTranslateProps.base,
} as ITranslate;
