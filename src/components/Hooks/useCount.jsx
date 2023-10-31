import { useState } from "react"

const useCount = () => {
    const [count, setCount] = useState (0)

    const decrementar = () => {
        setCount(old => (old > 0 ? old - 1 : 0))
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