import { useEffect, useRef } from "react"

const Button = () =>{

    const buttonRef = useRef()

    useEffect(()=>{
        const button = buttonRef.current

        const handleClick = () => console.log ('click!!')

        button.addEventListener('click', () => handleClick)

        return () => {
            button.removeEventListener ('click', handleClick)
        }
    }, [])
 
    return <button ref={buttonRef}>boton</button>
}

export default Button