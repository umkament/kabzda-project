import React from "react";


type ItemType = {
  title: string
  value: any
}

export type AccordionPropsType = {
  title: string
  collapsed: boolean
  /**
   * example for comment, you should input /**, and after that pushed button 'enter'
   */
  setAccordionCollapsed: () => void
}

function Accordion(props: AccordionPropsType) {
  console.log("Accordion rendering")
  return <>
    <AccordionTitle title={props.title}
                    onClick={props.setAccordionCollapsed}
    />
    {!props.collapsed && <AccordionBody/>}
  </>
}

type AccordionTitlePropsType = {
  title: string
  onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
  console.log("AccordionTitle rendering")
  return (
     <h3 onClick={(e) => props.onClick()}> {props.title}</h3>
  )
}

export type AccordionBodyPropsType = {

}

function AccordionBody(props: AccordionBodyPropsType) {
  console.log("AccordionBody rendering")
  return <ul>
    <li>1</li>
  </ul>
}

export default Accordion;