import { createSlice} from "@reduxjs/toolkit";
import { Games } from "../../helpers/pseudo-data/games";

const filterSlice = createSlice({
    name:'filter',
    initialState:{
        games:Games
    },
    reducers:{
        filterByCategory(state,action){
            state.games = Games
            if(action.payload !== 'all') {
                state.games = state.games.filter(el => el.category === action.payload)            
            }
        },
        filterByProvider(state,action){
            state.games = Games
            if(action.payload !== 'all') {
                state.games = state.games.filter(el => el.provider === action.payload)            
            }
        }
    }
})

export const {filterByCategory,filterByProvider} = filterSlice.actions

export default filterSlice.reducer