import React, { useState, useEffect } from 'react'
import { Pane, Paragraph } from 'evergreen-ui'
import axios from 'axios'
import './Plants.css'
import getPlants from '../../hooks/getPlantsHook'

const Plants = () => {
    const plants = getPlants();

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