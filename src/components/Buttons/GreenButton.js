import React from 'react'
import { Button } from 'evergreen-ui'
import './GreenButton.css'

const GreenButton = props => {
    return (
        <Button
            className="green__button"
            appearance="minimal"
            intent="success"
            onClick={props.onClick}
        >
            {props.children || "Add!"}
        </Button> 
    )
}

export default GreenButton