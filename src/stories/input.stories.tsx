import React, {ChangeEvent, MouseEventHandler, useRef, useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';


export default {
  title: 'Input',
  //component: Input,

}

export const UncontrolledInput = () => <input/>
// ниже будут приведены способы того, как мы можем трэкать значение вэлью

//1. с помощью useState и currentTarget
export const TrackValueOfUncontrolledInput = () => {

  const [value, setValue] = useState('')
  return <>
    <input onChange={(event)=>{
      setValue(event.currentTarget.value)

      //можно записать более развернуто
      // const actualValue = event.currentTarget.value
      // setValue(actualValue)
    }
    }/>
    - {value}
    </>
}

// 2. с помощью ссылок (рефов) ref
// поскольку как в предыдущем примере нам может быть не нужно узнавать каждое впечатываемое значение в input
// а нам достаточно лишь контролировать значение после, например, нажатия определенной кнопки
           // 2.1 данный пример - это норушение принципов работы с React
           // поскольку мы напрямую влезли в DOM-элементы,а это нарущение принципов
export const GetValueOfUncontrolledInputByButton = () => {

  const [value, setValue] = useState('')
  return <>
    <input id={'inputID'}/> <button onClick={
    (e)=>{
      const el = document.getElementById('inputID') as HTMLInputElement
      setValue(el.value)
    }
  }>save</button> - actual value: {value}
  </>
}
            // пример с использованием хука useRef (создание ссылок)
export const GetValueOfUncontrolledInputByButtonAndRef = () => {

  const [value, setValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const save = () => {
    const el = inputRef.current as HTMLInputElement
    setValue(el.value)
  }
  return <>
    <input ref={inputRef}/> <button onClick={save}>save</button> - actual value: {value}
  </>
}

export const ControlledInput = ()=> {
  const [parentValue, setParentValue] = useState('')

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setParentValue(e.currentTarget.value)

  }
  return <input
     value={parentValue}
     onChange={onChange}
  />
}

export const ControlledCheckbox = ()=> {
  const [parentValue, setParentValue] = useState(true)

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setParentValue(e.currentTarget.checked)

  }
  return <input type='checkbox'
                checked={parentValue}
                onChange={onChange}
  />
}

export const ControlledSelect = ()=> {
  const [parentValue, setParentValue] = useState<string | undefined>(undefined)

  const onChange = (e: ChangeEvent<HTMLSelectElement> ) => {
    setParentValue(e.currentTarget.value)

  }
  return <select value={parentValue}
                onChange={onChange}>
    <option>none</option>
    <option value={1}>Berlin</option>
    <option value={2}>Paris</option>
    <option value={3}>Amsterdam</option>
  </select>

}




       export const ControlledInputWithFixedValue = () => <input value={'it-icubator.by'}/>
