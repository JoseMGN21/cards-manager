import React from 'react'

class Card extends React.Component {
    render() {
        return <li>{this.props.id}</li>
    }
}

export default Card