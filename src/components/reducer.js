export default function reducer(state,action){
    switch(action.type){
        case "ADD": {
            return [...state,action.payload];
        }
        case "DELETE": {
            return state.filter((item) => item !== action.payload);
        }
        default:
        return state;
    }
}