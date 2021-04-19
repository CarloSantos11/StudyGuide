import React from 'react'

const Button = (props) => {
   
    return (
        <div style={{color: "white", backgroundColor: "orange", borderRadius:"15px", width:"350px", textAlign:"center"}}>{props.children}</div>
    )
}

export default Button
