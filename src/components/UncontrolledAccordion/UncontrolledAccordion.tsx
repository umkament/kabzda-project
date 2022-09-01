import React, {useState} from "react";

type AccordionPropsType = {
  title: string
  // collapsed: boolean
}

function UncontrolledAccordion(props: AccordionPropsType) {
  console.log("Accordion rendering")

  let [collapsed, setCollapsed] = useState(false)
  return <>
    <AccordionTitle title={props.title}/>
    <button onClick={()=>{setCollapsed(true)}}>pushOFF</button>
    <button onClick={()=>{setCollapsed(false)}}>pushON</button>
    { !collapsed && <AccordionBody/> }
  </>
}

type AccordionTitlePropsType = {
  title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
  console.log("AccordionTitle rendering")
  return (
     <h3> {props.title}</h3>
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