const filterDefault = {
    keyword: '',
    sortby: 'amount',
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
        default: 
            return state            
    }}

export default filterReducer;