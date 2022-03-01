

const initialState = {
    show: false
}

const reducerShow = (state = initialState, action) => {
    if (action.type === 'TOGGLE') {
        return { ...state, show: !state.show }
    } else {
        return state
    }
}

export default reducerShow