import React, {useState, KeyboardEvent} from 'react'
import styles from './Select.module.css'


type ItemType = {
  title: string
  value: any
}
export  type SelectPropsType = {
  value?: any
  onChange: (value: any) => void
  items: ItemType[]
}

export function Select(props: SelectPropsType) {

  let [active, setActive] = useState(false)
  let [lightElement, setLightElement] = useState(props.value)

  const selectedItem = props.items.find(i => i.value === props.value)
  const lightItem = props.items.find(i => i.value === lightElement)

  const toggleItems = () => setActive(!active)
  const chooseItem = (value: any) => {
    props.onChange(value);
    toggleItems()
  }
  const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {

  }

  return (
     <>
       <select>
         <option>Minsk</option>
         <option>Moscow</option>
         <option>Kiev</option>
       </select>
       <div className={styles.select + ' '}
            onKeyUp={onKeyUp}
            tabIndex={0}
       >
         <span className={styles.main}
               onClick={toggleItems}>{selectedItem && selectedItem.title}
         </span>
         {active &&
            <div className={styles.items}>
              {props.items.map(i => {

                return <div className={styles.item + ' ' + (lightItem === i ? styles.selected : '')}
                   key={i.value}
                            onClick={() => chooseItem(i.value)}
                            onMouseEnter={()=>setLightElement(i.value)}
                >{i.title}
                </div>
              })}

            </div>
         }
       </div>
     </>
  )

}