import React from 'react'
import "./Pic.css"
export default function Pic({url}) {
    return (
        <div className="pic">
            <img src={url}/>
        </div>
    )
}
