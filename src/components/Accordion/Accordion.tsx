import React from "react";


type ItemType = {
  title: string
  value: any
}
/**
 * example for comment, you should input /**, and after that pushed button 'enter'
 */
export type AccordionPropsType = {
  title: string
  collapsed: boolean
  setAccordionCollapsed: () => void
  items: Array<ItemType>
  onClick: (value: any)=>void
}

function Accordion(props: AccordionPropsType) {
  console.log("Accordion rendering")
  return <>
    <AccordionTitle title={props.title}
                    onClick={props.setAccordionCollapsed}
    />
    {!props.collapsed && <AccordionBody items={props.items}
                                        onClick={props.onClick}
    />}
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
items: Array<ItemType>
  onClick: (value: any)=>void
}

function AccordionBody(props: AccordionBodyPropsType) {
  console.log("AccordionBody rendering")
  return <ul>
    {props.items.map((i, index) => <li onClick={()=>{props.onClick(i.value)}} key={index}>{i.title}</li>)}
  </ul>
}

export default Accordion;