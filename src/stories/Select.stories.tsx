import React from 'react'
import {Select} from "./Select";
import {action} from "@storybook/addon-actions";


export default {
  title: 'Select',
  component: Select
}

export const SelectExample = () => <Select value={'2'}
                                           onChange={action('value changed')}
                                           items={[
                                             {value: '1', title: 'Volgograd'},
                                             {value: '2', title: 'Minsk'},
                                             {value: '3', title: 'Sochi'},
                                           ]}
/>

export const SelectWithoutValue = () => <Select onChange={action('value changed')}
                                                items={[
                                                  {value: '1', title: 'Volgograd'},
                                                  {value: '2', title: 'Minsk'},
                                                  {value: '3', title: 'Sochi'},
                                                ]}
/>