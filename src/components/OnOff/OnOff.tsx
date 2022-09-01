
export type PropsType = {
 on: boolean
}

export function OnOff(props: PropsType) {

 const onStyle = {
  width: '30px',
  high: '20px',
  border: '1px solid black',
  display: 'inline-block',
  padding: '2px',
  marginLeft: '2px',
  background: props.on ? 'green' : 'white'
 }
 const offStile = {
  width: '30px',
  high: '20px',
  border: '1px solid black',
  display: 'inline-block',
  padding: '2px',
  marginLeft: '2px',
  background: props.on ? 'white' : 'red'
 }
 const lampStyle = {
  width: '3px',
  high: '20px',
  borderRadius: '10px',
  border: '1px solid black',
  display: 'inline-block',
  padding: '6px',
  marginLeft: '5px',
  background: props.on ? 'green' : 'red'
 }

 return <div>
 <div style={onStyle}>on</div>
 <div style={offStile}>off</div>
 <div style={lampStyle}></div>
 </div>
 }