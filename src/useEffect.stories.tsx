import React, {useEffect, useState} from 'react'

export default {
  title: 'Effect demo',
}

export const KeysTrackerExample = () => {
  const [text, setText] = useState('')

  useEffect(()=> {
    const handler = (e: KeyboardEvent) => {
      setText(text + e.key)
    }
    window.addEventListener('keypress', handler)
    return () => {
      window.removeEventListener('keypress', handler)
    }
  }, [text])

  return <>
  Typed text: {text}
  </>



}