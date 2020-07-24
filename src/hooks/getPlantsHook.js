import React from "react";
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function usePlants() {
    const [plants, getPlants] = useState(null)

    useEffect(() => {
        const getPlanters = async () => {
            const headers = {
                "Access-Control-Allow-Origin": "*"
            }
            const {data} = await axios.get("http://localhost:3000/plants", headers)
            getPlants(data)
        }
        getPlanters()
    }, [plants])

    return plants;
}