import { NameActions } from "../actions/nameActions"
type NameState = {
name: string;
}
const initialState: NameState = {
name: '',
}
const NameReducer = (state: NameState = initialState, action: NameActions) => {
    switch(action.type) {
        case 'SET_NAME':
            return {
                ...state,
                name: action.payload,
            }
        default:
            return state;
    }
}
export default NameReducer;
In countReducer.ts type the following code:

import { CountActions } from "../actions/countActions";
type CountState = {
    count: number;
}
const initialState: CountState = {
    count: 0,
}
const countReducer = (state: CountState = initialState, action: CountActions) => {
    switch(action.type) {
        case 'DECREMENT':
            return {
                ...state,
                count: state.count - 1,
            }
        case 'INCREMENT':
            return {
                ...state,
                count: state.count + 1,
            }
        default:
            return state;
    }
}
export default countReducer;