import Button from './Button';

function Box({title, user}) {
    function sendMessage() {
        alert("This is coming from the parent");
    };

    return  (
        <div className="myFirstBox">
            <h1>{title}</h1>
            <h1>{user}</h1>
            <Button myParentMethod={sendMessage}/>
        </div>
    )
}

// let myVars = {
//   title: 'hello'
// }

export default Box;