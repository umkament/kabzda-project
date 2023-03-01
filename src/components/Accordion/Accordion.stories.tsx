import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import Accordion, {AccordionPropsType} from "./Accordion";
import {Story} from "@storybook/react";

export default {
  title: 'Accordion',
  component: Accordion,
}

const callback = action('collapsed or uncollapsed title')
//const onClickCallback = action('item was clicked')

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

export const CollapsedMode = () => <Accordion collapsed={true} title={"Menu"} setAccordionCollapsed={callback}/>
export const UncollapsedMode = () => <Accordion collapsed={false} title={"Users"} setAccordionCollapsed={callback}/>


export const ModeChanging = () => {
  const [value, setValue] = useState<boolean>(true)

  return <Accordion collapsed={value} setAccordionCollapsed={() => setValue(!value)} title={"Users"}
  />
}

