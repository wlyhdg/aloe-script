import React from 'react'
import { Button } from 'evergreen-ui'

const GreenButton = props => {
    return (
        <Button
            appearance="default"
            intent="success"
        >
            {props.children || "Add!"}
        </Button> 
    )
}

export default GreenButton