import React from "react";

type AccordionPropsType = {
  title: string
  collapsed: boolean
  setAccordionCollapsed: (accordionCollapsed: boolean)=> void
}

function Accordion(props: AccordionPropsType) {
  console.log("Accordion rendering")
  return <>
    <AccordionTitle title={props.title}
                    onClick={ ()=>{props.setAccordionCollapsed(!props.collapsed)} }
    />
    { !props.collapsed && <AccordionBody/> }
  </>
}

type AccordionTitlePropsType = {
  title: string
  onClick: (accordionCollapsed: boolean)=>void
}

function AccordionTitle(props: AccordionTitlePropsType) {
  console.log("AccordionTitle rendering")
  return (
     <h3 onClick={()=>props.onClick(false)}> {props.title}</h3>
  )
}

function AccordionBody(props: any) {
  console.log("AccordionBody rendering")
  return <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
  </ul>
}

export default Accordion;