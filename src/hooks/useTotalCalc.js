import {useMemo} from "react";

export const useTotalPrice = (array) => {
    const totalPrice = useMemo(() => {
        return array.reduce((accum, int) => accum + int.price, 0)
    }, [array])

    return totalPrice
}

export const useTotalQuant = (array) => {
    const totalQuant = useMemo(() => {
        return array.reduce((accum, int) => accum + int.quantity, 0)
    }, [array])

    return totalQuant
}