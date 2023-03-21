import React, {useEffect, useState} from "react";
import style from './analogClock.module.css'

type PropsType = {
  mode?: 'analog' | 'digital'
}

const getTwoDigitsStrings = (num: number) => num < 10 ? '0' + num : num

export const Clock: React.FC<PropsType> = (props) => {
  console.log('Clock')
  const [date, setDate] = useState(new Date())

  useEffect(() => {

    console.log('useEffect')
    const intervalID = setInterval(() => {
      console.log('setInterval')
      setDate(new Date())
    }, 1000)

    return ()=>{
      clearInterval(intervalID)
    }

  }, [])

  let view

  switch (props.mode) {
    case 'analog':
      view = <AnalogClockView date={date}/>
      break
    case 'digital':
    default:
      view = <DigitalClockView date={date}/>
  }

  return <div>
    {view}
  </div>
}

export type ClockViewPropsType = {
  date: Date
}


export const DigitalClockView: React.FC<ClockViewPropsType> = ({date}) => {

  return <>
    <span>{getTwoDigitsStrings(date.getHours())}</span>
    :
    <span>{getTwoDigitsStrings(date.getMinutes())}</span>
    :
    <span>{getTwoDigitsStrings(date.getSeconds())}</span>
  </>
}

export const AnalogClockView: React.FC<ClockViewPropsType> = ({date}) => {
  const secondsStyle = {
    transform: `rotate(${date.getSeconds() * 6}deg)`
  };
  const minutesStyle = {
    transform: `rotate(${date.getMinutes() * 6}deg)`
  };
  const hoursStyle = {
    transform: `rotate(${date.getHours() * 30}deg)`
  };

  return <div className={style.clock}>
   <div className={style["analog-clock"]}>
     <div className={`${style.dial} ${style.seconds}`} style={secondsStyle} />
     <div className={`${style.dial} ${style.minutes}`} style={minutesStyle} />
     <div className={`${style.dial} ${style.hours}`} style={hoursStyle} />
   </div>
 </div>
}

