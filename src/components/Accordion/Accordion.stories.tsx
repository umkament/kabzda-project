import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import Accordion from "./Accordion";
import {Story} from "@storybook/react";

export default {
  title: 'Accordion',
  component: Accordion,
}

const callback = action('collapsed or uncollapsed title')
const onClickCallback = action('item was clicked')

/*const Template: Story<AccordionPropsType> = (args) => <Accordion {...args}/>

export const CollapsedMode = Template.bind({})
CollapsedMode.args = {
collapsed: true,
  title: "Menu",
  setAccordionCollapsed: callback
}

export const UncollapsedMode =Template.bind({})
UncollapsedMode.args = {
  collapsed: false,
  title: "Users",
  setAccordionCollapsed: callback
  }*/

export const CollapsedMode = () => <Accordion collapsed={true} title={"Menu"} setAccordionCollapsed={callback} items={[]} onClick={onClickCallback}/>
export const UncollapsedMode = () => <Accordion collapsed={false} title={"Users"} setAccordionCollapsed={callback} items={[{title: 'dsdd', value: 1}, {title: 'jhkfjhd', value: 2}, {title: 'ksjsldk', value: 3}]} onClick={onClickCallback}/>


export const ModeChanging = () => {
  const [value, setValue] = useState<boolean>(true)

  return <Accordion collapsed={value} setAccordionCollapsed={() => setValue(!value)} title={"Users"} items={[{title: 'dsdd', value: 1}, {title: 'jhkfjhd', value: 2}, {title: 'ksjsldk', value: 3}]} onClick={onClickCallback}/>
}

