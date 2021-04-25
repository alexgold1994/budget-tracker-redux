export const setKeywordFilter = (keyword = '') => {
    return {
        type: 'SET_KEY_WORD_FILTER',
        keyword
    }
}

export const sortByAmount = () => {
    return {
        type: 'SORT_BY_AMOUNT',
    }
}

export const sortByDate = () => {
    return {
        type: 'SORT_BY_DATE',
}
}