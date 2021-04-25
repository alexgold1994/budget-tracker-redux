const filterDefault = {
    keyword: '',
    sortby: 'amount',
    startDate: undefined,
    endDate: undefined
}


const filterReducer = (state = filterDefault, action) => {    
    switch(action.type) {
        default: 
            return state            
    }}

export default filterReducer;