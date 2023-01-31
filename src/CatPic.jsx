import React from 'react'

const CatPic = ({ catPic, grooming }) => {
    return (
        <div>
            <img src={catPic} alt="" />
            <p>{grooming}</p>
        </div>
    )
}

export default CatPic
