import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import Accordion from "./Accordion";

export default {
  title: 'Accordion',
  component: Accordion,
}

const callback = action('collapsed or uncollapsed title')
const onClickCallback = action('item was clicked')

export const CollapsedMode = () => <Accordion collapsed={true} title={"Menu"} setAccordionCollapsed={callback}/>
export const UncollapsedMode = () => <Accordion collapsed={false} title={"Users"} setAccordionCollapsed={callback}
/>


export const ModeChanging = () => {
  const [value, setValue] = useState<boolean>(true)

  return <Accordion collapsed={value} setAccordionCollapsed={() => setValue(!value)} title={"Users"}
  />
}

