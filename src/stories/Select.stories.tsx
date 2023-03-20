import React, {useState} from 'react'
import {Select} from "./Select";
import {action} from "@storybook/addon-actions";


export default {
  title: 'Select',
  component: Select
}

export const SelectExample = () => {

  const [value, setValue]= useState('2')

  return <Select value={value}
          onChange={setValue}
          items={[
            {value: '1', title: 'Volgograd'},
            {value: '2', title: 'Minsk'},
            {value: '3', title: 'Sochi'},
          ]}
  />
}

export const SelectWithoutValue = () => {
  const [value, setValue]= useState(null)

  return <Select onChange={setValue}
                 value={value}
                 items={[
                   {value: '1', title: 'Volgograd'},
                   {value: '2', title: 'Minsk'},
                   {value: '3', title: 'Sochi'},
                 ]}
  />
}