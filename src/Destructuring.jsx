import React from 'react'

export default function Destructuring({user,name,age,city,degree,contact}) {
  return (
    <div>
        {/* <p>{props.name1} , {props.age1} , {props.city1}</p>
        <p>{props.name2} , {props.age2} , {props.city2}</p>
        <p>{props.name3} , {props.age3} , {props.city3}</p>
        <p>{props.name4} , {props.age4} , {props.city4}</p>
        <p>{props.name5} , {props.age5} , {props.city5}</p> */}
        {user} - {name} , {age} , {city} , {degree} , {contact}



    </div>
  )
}
