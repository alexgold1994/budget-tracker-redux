const filterDefault = {
    keyword: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
}


const filterReducer = (state = filterDefault, action) => {    
    switch(action.type) {
        case 'SET_KEY_WORD_FILTER':
            return {
                ...state,
                keyword: action.keyword
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        default: 
            return state            
    }}

export default filterReducer;