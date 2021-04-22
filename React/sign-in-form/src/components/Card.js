import React from 'react'

const Card = ({username}, {email}) => {
    return (
        <div>
            <h1>{username}</h1>
            <h1>{email}</h1>
        </div>
    )
}

export default Card
