import React, { useState, useEffect } from 'react'
import { Pane, Paragraph, Icon, IconButton } from 'evergreen-ui'
import axios from 'axios'
import './Plants.css'
import getPlants from '../../hooks/getPlantsHook'

const Plants = () => {
    const plants = getPlants();

    const removePlant = (idx) => {
        let data;
        for (let p of plants) {
            if (p.id === idx) {
                data = p;
            }
        }
        axios.delete(`http://localhost:3000/plants/${idx}`, {data})
    }

    return (
        <div className="plants">
            {plants ? plants.map(({id, plant, description, waterFrequency, owner}) => {
                return(
                    <Pane
                        className="plant"
                        key={id}
                        border="default"
                        background="tint2"
                        elevation={3}
                    >
                        <IconButton 
                            className="plant__cancel"
                            intent="danger" 
                            icon="take-action"
                            onClick={() => removePlant(id)}
                        />
                        <h2>{plant}</h2>
                        <Paragraph>{description}</Paragraph>
                        <Paragraph> {`Please water ${waterFrequency} to maintain optimal growth .`} </Paragraph>
                        <Paragraph>Owned by {owner}</Paragraph>
                    </Pane>   
                )
            }) : ''}
        </div>
    )
}

export default Plants