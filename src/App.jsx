import { useEffect, useState } from 'react'
import './App.css'
import CatPic from './CatPic'

function App() {
    const [cat, setCat] = useState({})
    async function fetchData() {
        const response = await fetch("https://api.api-ninjas.com/v1/cats?name=siamese", {
            method: "GET",
            headers: {
                "x-api-key": "hTgqdzCr/pU7UDtrEuKJZg==zHD8TBYyJD59ie7n"
            }
        })
        const data = await response.json()
        setCat(data[0])
    }

    useEffect(() => {
        fetchData()
    }, [])


    return (
        <div>
            <CatPic catPic={cat.image_link} grooming={cat.grooming} />
        </div>
    )
}

export default App

