import Button from "./Button"

const Box = (props) => {
    return (
        <div className="box">
            <h1>{props.heading}</h1>
            <Button message={props.message} alertMessage={props.popUpMessage}/>      
        </div>
    )
}

export default Box               