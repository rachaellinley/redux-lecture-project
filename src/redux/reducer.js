import axios from 'axios';

const initialState = {
    username: "",
    characters: [],
    loading: false
}

//constants
const UPDATE_USERNAME = "UPDATE_USERNAME";
const UPDATE_CHARACTERS = "UPDATE_CHARACTERS";

//action creator 
export function updateCharacters(){
    return {
        type: UPDATE_CHARACTERS,
        payload: axios.get("https://breakingbadapi.com/api/characters")
    }
}

export function updateUsername(newUsername){
    return {
        type: UPDATE_USERNAME,
        payload: newUsername
    }
}
//creates the action for us and we pass in username in the login component

//reducer 

export default function reducer(state=initialState, action){
  switch(action.type){
        case UPDATE_USERNAME:
            return {
                ...state,
                username:action.payload
            };
            //SET YOUR PROMISE AS YOUR PAYLOAD
        
                case `${UPDATE_CHARACTERS}_FULFILLED`:
                    //RECIEVES DATA BACK 
               console.log({
                ...state,
                characters: action.payload.data
            })
               return {
                   ...state,
                   characters: action.payload.data,
                   loading: false
               }
               case `${UPDATE_CHARACTERS}_PENDING`:
               return{
                   ...state,
                   loading:true
               };
            

        default: return state; 
    }
}
    //set state equal to initial state if state is undefined 
    //when we run the program for the first time, state is empty 