import {useState} from "react";


export const useFetching = (callback) => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)

    const fetchingPosts = async () => {
        try {
            setIsLoading(true)
            await callback()
        } catch (error) {
            setError(error.message)
        } finally {
            setIsLoading(false)
        }
    }

    return [fetchingPosts, isLoading, error]
}