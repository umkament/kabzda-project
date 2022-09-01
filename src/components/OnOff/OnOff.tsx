import {useState} from "react";

export type PropsType = {
 //on: boolean
}

export function OnOff(props: PropsType) {

 let [on, setOn] = useState(false)

 const onStyle = {
  width: '30px',
  high: '20px',
  border: '1px solid black',
  display: 'inline-block',
  padding: '2px',
  marginLeft: '2px',
  background: on ? 'green' : 'white'
 }
 const offStile = {
  width: '30px',
  high: '20px',
  border: '1px solid black',
  display: 'inline-block',
  padding: '2px',
  marginLeft: '2px',
  background: on ? 'white' : 'red'
 }
 const lampStyle = {
  width: '3px',
  high: '20px',
  borderRadius: '10px',
  border: '1px solid black',
  display: 'inline-block',
  padding: '6px',
  marginLeft: '5px',
  background: on ? 'green' : 'red'
 }

 return <div>
 <div style={onStyle} onClick={()=>{setOn(true)}}>on</div>
 <div style={offStile} onClick={()=>{setOn(false)}}>off</div>
 <div style={lampStyle}></div>
 </div>
 }