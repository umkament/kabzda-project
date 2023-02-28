import React from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5


type StarPropsType = {
  selected: boolean
  onClick: () => void
}

function Star(props: StarPropsType) {
  console.log("Star rendering")

  return <span onClick={() => {
    props.onClick()
  }}> {props.selected ? <b>Star </b> : "Star "} </span>
}

type RatingPropsType = {
  value: RatingValueType
  setRatingValue: (value: RatingValueType) => void
}

export function Rating(props: RatingPropsType) {
  console.log("Rating rendering")

  return (
     <div>
       <Star selected={props.value > 0} onClick={() => props.setRatingValue(1)}/>
       <Star selected={props.value > 1} onClick={() => {
         props.setRatingValue(2)
       }}/>
       <Star selected={props.value > 2} onClick={() => {
         props.setRatingValue(3)
       }}/>
       <Star selected={props.value > 3} onClick={() => {
         props.setRatingValue(4)
       }}/>
       <Star selected={props.value > 4} onClick={() => {
         props.setRatingValue(5)
       }}/>
     </div>
  )
}




