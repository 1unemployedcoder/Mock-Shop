import {useMemo} from "react";


export const useSortedGoods = (sort, goods) => {
    const sortedGoods = useMemo(() => {
        if (sort) {
            return [...goods].sort((a, b) => {
                if (typeof a[sort] === 'number') {
                    return a[sort] - b[sort]
                } else {
                    return a[sort].localeCompare(b[sort])
                }
            })
        }
        return goods
    }, [sort, goods])

    return sortedGoods
}

export const useGoods = (sort, query, goods) => {
    const sortedGoods = useSortedGoods(sort, goods)

    const searchedAndSortedGoods = useMemo(() => {
        return sortedGoods.filter(post => post.title.toLowerCase().includes(query))
    }, [query, sortedGoods])

    return searchedAndSortedGoods
}