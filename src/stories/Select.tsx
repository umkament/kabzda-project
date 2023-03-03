import React, {useState} from 'react'
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

  const selectedItem = props.items.find(i => i.value === props.value)
const showItems = () => setActive(!active)
  return (
     <>
       <select>
         <option>Minsk</option>
         <option>Moscow</option>
         <option>Kiev</option>
       </select>
     <div className={styles.select + ' '}>
       <h3 onClick={showItems}>{selectedItem && selectedItem.title}</h3>
       { active &&
         <div className={styles.items}>
           {props.items.map(i => <div key={i.value}>{i.title}</div>)}
         </div>
       }
     </div>
       </>
  )

}