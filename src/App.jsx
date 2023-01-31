import { useEffect, useState } from 'react'
import './App.css'
import CatPic from './CatPic'

function App() {
    // Sets the initial state to an empty object
    const [cat, setCat] = useState({})

    // Function to fetch the cat data, and setState to the cat object
    async function fetchData() {
        const response = await fetch("https://api.api-ninjas.com/v1/cats?name=siamese", {
            method: "GET",
            headers: {
                "x-api-key": "API KEY HERE"
            }
        })
        const data = await response.json()
        setCat(data[0])
    }

    // This useEffect has an empty dependency array.
    // THIS MEANS THE CODE INSIDE ONLY RUNS ON THE INITIAL PAGE LOAD
    // otherwise known as componentDidMount?
    useEffect(() => {
        fetchData()
    }, [])

    // THERE ARE NO CAPITAL LETTERS IN ANY HTML TAGS, THAT IS WHY WE 
    // NAME OUR COMPONENTS WITH CAPITAL LETTERS BECAUSE REACT WHEN TRANSPILING
    // THE JSX WILL RECOGNIZE THAT <CatPic /> IS A REACT COMPONENT, AND 
    // UNDERSTANDS THAT THE PRECEEDING VALUES ARE PROPS. THE PROPS OBJECT 
    // IS PASSED DOWN THE COMPONENTS FUNCTION AS AN ARGUMENT AND THE PROPS
    // CAN BE ACCESSED WITH DESTRUCTURING OR JUST PASSING THE WORDS PROPS
    // AND SAYING props.catPic
        
    return (
        <div>
            {/* this is how you passed down props  */}
            <CatPic catPic={cat.image_link} grooming={cat.grooming} />
        </div>
    )
}

export default App

