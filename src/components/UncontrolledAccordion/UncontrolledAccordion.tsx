import React, {useState} from "react";

type AccordionPropsType = {
  title: string
  // collapsed: boolean
}

function UncontrolledAccordion(props: AccordionPropsType) {
  console.log("Accordion rendering")

  let [collapsed, setCollapsed] = useState(false)
  return <>
    <AccordionTitle title={props.title}
                    onClick={ ()=>{setCollapsed(!collapsed)} }/>


    { !collapsed && <AccordionBody/> }
  </>
}

type AccordionTitlePropsType = {
  title: string
  onClick: ()=>void
}

function AccordionTitle(props: AccordionTitlePropsType) {
  console.log("AccordionTitle rendering")
  return (
     <h3 onClick={ ()=>{props.onClick()} }> {props.title}</h3>
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

export default UncontrolledAccordion;