import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd, showForm}) => {

  return (
    <>
      <header className="header">
        <h1>{title}</h1>   
        <Button 
          color={showForm ? "red" : "#071a07"}
          text={showForm ? "Close" : "Add"} 
          onAdd={onAdd}
        />    
      </header>
    </>
  )
}

Header.defaultProps = {
  title: "Default"
}

Header.propTypes = {
  title: PropTypes.string
}

// const HeadingStyle = {
//   backgroundColor: "black",
//   color: "green",                  //INLINE CSS EXAMPLE
//   textAlign: "center"
// }
export default Header



