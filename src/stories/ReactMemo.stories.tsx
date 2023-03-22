import {useEffect, useState} from "react";

export default {
  title: 'useEffect demo'
}

export const SetTimeoutExample = () => {

  const [fake, setFake] = useState(1)
  const [counter, setCounter] = useState(1)

  console.log('SetTimeoutExample')

  useEffect(() => {
    const intervalID = setInterval(() => {
      setCounter(s => s + 1)
    }, 3000)
    return () => {
      clearInterval(intervalID)
    }
  }, [])

  return <>
    counter - {counter}
    fake - {fake}

  </>

}