import React from 'react';
import {UncontrolledRating} from "./UncontrolledRating";
import {action} from "@storybook/addon-actions";

export default {
  title: 'UncontrolledRating',
  component: UncontrolledRating,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const callback = action('click star')

export const EmptyRating = () => <UncontrolledRating onChange={callback}/>


