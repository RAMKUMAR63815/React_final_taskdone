import { useState } from "react";

function useCreate(value) {
    const [count, setcount] = useState(value);

    const increment = () => {
        setcount(prev => prev + 1);
    };

    const decrement = () => {
        setcount(prev => prev - 1);
    };

    const reset = () => {
        setcount(0);
    };

    return { count, increment, decrement, reset };
}

export default useCreate;