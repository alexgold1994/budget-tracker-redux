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
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        default: 
            return state            
    }}

export default filterReducer;