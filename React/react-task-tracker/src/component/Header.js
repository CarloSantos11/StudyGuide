import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
  return (
    <>
      <header className="header">
        <h1>{title}</h1>   
        <Button color="#071a07" text="Add"/>    
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



