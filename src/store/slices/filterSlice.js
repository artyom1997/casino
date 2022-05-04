import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name:'filter',
    initialState:{
        games:[]
    },
    reducers:{
        addGame(state,action){
            console.log(state)
            console.log(action)

        }
    }
})

export const {addGame} = filterSlice.actions

export default filterSlice.reducer