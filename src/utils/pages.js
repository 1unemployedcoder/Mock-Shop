
export const pages = (totalCount, limit) => {
    return Math.ceil(totalCount / limit)
}