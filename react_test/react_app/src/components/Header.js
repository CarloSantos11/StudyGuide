import PropTypes from 'prop-types'

const Header = ({title, subtitle}) => {
    return (
        <header className = "header" style = {HeadingStyle}>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <button className='btn'>Add</button>
        </header>
    )
}

Header.defaultProps = {
    title: "Task Tracker",
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

const HeadingStyle = {
    backgroundColor: "orange",
    color: "white"
}

export default Header