import React, {useState, useEffect} from 'react';
import "./CountButton.css"

const CountButton = (props) => {
  const [currentCount, setCurrentCount] = useState(0);
  
  const handleClick = () => {
    setCurrentCount(currentCount + props.incrementBy);
  }

  useEffect(() => {
    if (currentCount % 10 === 0){
       setCurrentCount(0);
      }
    }, [currentCount]) 


  const buttonStyle = {
    backgroundColor: props.buttonColor,
  }

  return(
    <div>
      <button style={buttonStyle} onClick={handleClick}>+ {props.incrementBy}</button>
      <div className={'count-display'}>{currentCount}</div>
    </div>
  )
}

export default CountButton;
