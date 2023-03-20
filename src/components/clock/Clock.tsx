import React, {useEffect, useState} from "react";

type PropsType = {}

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

  // const secondsString =getTwoDigitsStrings(date.getSeconds())
  // const minutesString = getTwoDigitsStrings(date.getMinutes())
  // const hoursString = getTwoDigitsStrings(date.getHours())

  return <div>
    <span>{getTwoDigitsStrings(date.getHours())}</span>
    :
    <span>{getTwoDigitsStrings(date.getMinutes())}</span>
    :
    <span>{getTwoDigitsStrings(date.getSeconds())}</span>
  </div>
}