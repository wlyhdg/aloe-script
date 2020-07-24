import React from 'react'
import { TextInputField, Card } from 'evergreen-ui'
import './PlantInput.css'

const PlantInput = (props) => {
    return (
        <Card 
            className="inputs__card" 
            background="greenTint"
        >
            {props.funcs.map(([name, func], index) => {
                return <TextInputField key={index} name={name} label={name} onChange={(e) => func(e.target.value)} required/>
            })}
            {/* <TextInputField name="name" label="plant name" required/>
            <TextInputField name="description" label="description" required/>
            <TextInputField name="waterFrequency" label="water frequency" required/>
            <TextInputField name="owner" label="owner"/> */}
        </Card>
        
    )
}

export default PlantInput