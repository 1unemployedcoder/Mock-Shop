import {useEffect} from "react";

export const useCartGoods = (array, setState) => {
    useEffect(() => {
        const updatedGoods = [];

        for (let i = 0; i < array.length; i++) {
            const currentItem = array[i];
            const existingItem = updatedGoods.find(item => item.id === currentItem.id);

            if (existingItem) {
                existingItem.quantity += currentItem.quantity;
            } else {
                updatedGoods.push({ ...currentItem });
            }
        }
        setState(updatedGoods);
    }, [array]);
}