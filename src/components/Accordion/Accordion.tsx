import React from "react";

type AccordionPropsType = {
  title: string
  collapsed: boolean
  setAccordionCollapsed: ()=> void
}

function Accordion(props: AccordionPropsType) {
  console.log("Accordion rendering")
  return <>
    <AccordionTitle title={props.title}
                    onClick={props.setAccordionCollapsed}
    />
    { !props.collapsed && <AccordionBody/> }
  </>
}

type AccordionTitlePropsType = {
  title: string
  onClick: ()=>void
}

function AccordionTitle(props: AccordionTitlePropsType) {
  console.log("AccordionTitle rendering")
  return (
     <h3 onClick={(e)=>props.onClick()}> {props.title}</h3>
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