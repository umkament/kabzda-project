import {useState} from "react";

export type PropsType = {
 onChange: (on: boolean)=>void
}

export function UncontrolledOnOff(props: PropsType) {

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

 const onClickHandlerTrue = () => {
  setOn(true)
  props.onChange(true)
 }
 const onClickHandlerFalse = () => {
  setOn(false)
  props.onChange(false)
 }


 return <div>
 <div style={onStyle} onClick={onClickHandlerTrue}>on</div>
 <div style={offStile} onClick={onClickHandlerFalse}>off</div>
 <div style={lampStyle}></div>
 </div>
 }