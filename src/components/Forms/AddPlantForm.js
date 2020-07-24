import React, { useState } from 'react'
import PlantInput from '../Inputs/PlantInput'
import GreenButton from '../Buttons/GreenButton'
import './AddPlantForm.css'
import usePlants from '../../hooks/getPlantsHook'
import axios from 'axios'

const AddPlantForm = () => {
    const [name, setName] = useState('')
    const [details, setDetails] = useState('')
    const [watering, setWatering] = useState('')
    const [owner, setOwner] = useState('')

    const funcs = [['name', setName], ['description', setDetails], ['water frequency', setWatering], 
    ['owner', setOwner]]

    const plants = usePlants()

    const leggo = (e) => {
        e.preventDefault()
        const time = new Date().toLocaleString();
        const result = {
            id: plants.length + 1,
            plant: name,
            description: details,
            waterFrequency: watering,
            owner,
            createdAt: time
        }
        axios.post("http://localhost:3000/plants", result)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    return (
        <div className="plant__form">
            <PlantInput funcs={funcs} />
            <GreenButton onClick={leggo}>
                <span role="img" aria-labelledby="">🍃🍂 &nbsp; Add a plant &nbsp; 🍂🍃</span>
            </GreenButton>

        </div>
    )
}

export default AddPlantForm