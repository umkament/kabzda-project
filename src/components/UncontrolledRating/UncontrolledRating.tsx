import React, {useState} from "react";

type StarPropsType = {
  selected: boolean
  setValue: (value: 0|1|2|3|4|5)=>void
  value: 0|1|2|3|4|5
}

function Star(props: StarPropsType) {
  console.log("Star rendering")

    return <span onClick={()=>{props.setValue(props.value)}}>
      {props.selected ? <b>Star </b> : "Star "}
    </span>
}


type RatingPropsType = {
  //value: 0|1|2|3|4|5
}

export function UncontrolledRating(props: RatingPropsType) {
  console.log("Rating rendering")

  let [value, setValue]= useState(1)

  return <div>
       <Star selected={value > 0} setValue={setValue} value={1}/>
       <Star selected={value > 1} setValue={setValue} value={2}/>
       <Star selected={value > 2} setValue={setValue} value={3}/>
       <Star selected={value > 3} setValue={setValue} value={4}/>
       <Star selected={value > 4} setValue={setValue} value={5}/>
     </div>

}




