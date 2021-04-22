import React, {useState} from 'react'
import Card from "./Card"

const Form = () => {

    const [username, setUserName] = useState();
    const [submittedName, setSubmittedName] = useState();

    const [email, setEmail] = useState();
    const [submittedEmail, setSubmittedEmail] = useState();

    const [password, setPassword] = useState();
    const [submittedPassword, setSubmittedPassword] = useState();

    function changeName(event) {
        setUserName(event.target.value)
    }

    function enterEmail(event) {
        setEmail(event.target.value)
    }

    function enterPassword(event) {
        setPassword(event.target.value)
    }

    function submit(event) {
        event.preventDefault()
        setSubmittedName(username);
        setSubmittedEmail(email);
        setSubmittedPassword(password);
    }

    return (
        <div>
            <form action="">
                <input placeholder="Username" onChange={changeName} type="username"/>
                <input placeholder="Email" onChange={enterEmail} type="email"/>
                <input placeholder="Password" onChange={enterPassword} type="password"/>
                <input type="password-confirmation"/>
                <button onClick={submit} type="submit">Submit</button>
            </form>
            <Card username={submittedName} email={submittedEmail} password={submittedPassword}/>
        </div>
    )
}

export default Form
