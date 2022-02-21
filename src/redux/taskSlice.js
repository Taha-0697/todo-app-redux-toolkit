import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
    name: "task",

    initialState: [],

    reducers: {
        addTask: (state, action) => {
            const { title } = action.payload;
            const newTask = {
                id: state.length + 1,
                title,
                completed: true,
            };
            state.push(newTask);
        },

        deleteTodo: (state, action) => {
            return state.filter((todo) => todo.id !== action.payload.id);
        },

        toogleCopmpleted: (state, action) => {
            const index = state.findIndex((todo) => todo.id === action.payload.id);
            state[index].completed = action.payload.completed;
        },
    },
});

export const { addTask, deleteTodo ,toogleCopmpleted } = taskSlice.actions;

export default taskSlice.reducer;
