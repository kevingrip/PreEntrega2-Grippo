import { useState } from "react"

const useCount = () => {
    const [count, setCount] = useState (1)

    const decrementar = () => {
        setCount(old => (old > 1 ? old - 1 : 1))
    }

    const incrementar = () => {
        setCount(old => old +1)
    }

    return {
        count,
        decrementar,
        incrementar
    }
}

export default useCount