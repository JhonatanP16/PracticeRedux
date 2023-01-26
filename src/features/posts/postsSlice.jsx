import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
const initialState = [
    {
        id:'1',
        title:'Learnign redux',
        content:'Ive headr ajso good idea'
    },
    {
        id:'2',
        title:'Learnign JS',
        content:'Ive headr ajso good ideas'
    }
]

const postsSlice = createSlice({
    name:'posts',
    initialState,
    reducers:{
        postAdded:{
            reducer(state,action){
                state.push(action.payload)
            },
            prepare(title,content,userId){
                return{
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        userId
                    }
                }
            }
        }
    }
})


export const selectAllPost = (state) => state.posts;

export const {postAdded} = postsSlice.actions;

export default postsSlice.reducer