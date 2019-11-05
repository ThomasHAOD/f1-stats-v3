import React from 'react'
import Image from 'react-bootstrap/Image'

const MainImage = (props) => {
    return (
        <div className="image-and-subtitle">
        <Image src="./logo192.png" roundedCircle fluid/>
        <h1>HAM:44</h1>
        </div>
        
    )
}

export default MainImage;
