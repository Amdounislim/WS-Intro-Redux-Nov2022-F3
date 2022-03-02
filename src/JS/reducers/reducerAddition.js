import { ADDITION } from "../constants/actionsType"


const initialState = {
    sum: 0
}

// const reducerAddition = (state = initialState, action) => {
//     if (action.type === ADDITION) {
//         return { ...state, sum: action.payload.val1 + action.payload.val2 }
//         // return { ...state, sum: action.x + action.y }
//     } else {
//         return state
//     }

// }

const reducerAddition = (state = initialState, { type, payload }) => {
    if (type === ADDITION) {
        return { ...state, sum: payload.val1 + payload.val2 }
    } else {
        return state
    }

}

export default reducerAddition