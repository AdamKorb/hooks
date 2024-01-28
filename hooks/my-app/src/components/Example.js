import "./Example.css"
import { useState } from "react"

const Example = () =>{

    const [title, setTitle] = useState("Môj prvý Title")

    const [buttonText, setButtonText] = useState("Klikni sem")

    const buttonHandler = () => {
        setTitle ("Nový text Title")
    }

    const buttonTwoHandler = () => {
        setTitle ("Už posledný Title")
    }

    const buttonThreeHandler = () => {
        setTitle ("")
    }

    const changeButton = () => {
        setButtonText ("Nemal si tam klikať")
    }

    return(
        <div className="button-changer">
            <h2>{title}</h2>
            <button type = "button" onClick={buttonHandler} >Zmeniť title</button>
            <button type = "button" onClick={buttonTwoHandler}>Znova zmeniť title</button>
            <button type = "button" onClick={buttonThreeHandler}>Zmazať title</button>
            <button type = "button" onClick={changeButton}>{buttonText}</button>
        </div>
    )
}
export default Example