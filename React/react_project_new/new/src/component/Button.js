const Button = (props) => {
  function myAlert() {
    alert(props.alertMessage);
  }

  return <button onClick={myAlert}>{props.message}</button>;
};

export default Button;
