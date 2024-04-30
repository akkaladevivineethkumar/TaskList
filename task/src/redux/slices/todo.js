import { createSlice } from '@reduxjs/toolkit';
// utils
// import axios from '../../utils/axios';

// ----------------------------------------------------------------------

const initialState = {
    ischeckedUser: false,
    error: null,
    todos: [],
    editId: '',
};

const slice = createSlice({
    name: 'todo-list',
    initialState,
    reducers: {
        // START LOADING
        startLoading(state, action) {
            state.ischeckedUser = action.payload;
        },

        // HAS ERROR
        hasError(state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
        addTodo(state, action) {
            state.todos.push({
                id: Date.now(),
                text: action.payload,
                completed: false,
            });
        },
        toggleTodo(state, action) {
            const todo = state.todos.find((todo) => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        deleteTodo(state, action){
            const filtered = state.todos.filter((todo) => todo.id !== action.payload)
            state.todos = filtered 
        },
        editTodo(state, action){
            state.editId = action.payload
            state.isLoading = false;
            console.log(state.editId)
        },
        saveTodo(state, action){
            const updatedTodos = state.todos.map(items => items.id === state.editId ? {...items, text : action.payload}: items)
            state.todos = updatedTodos
        }
    },
});

// Reducer
export default slice.reducer;

// Actions

export const { startLoading, hasError, addTodo, toggleTodo, deleteTodo, editTodo , saveTodo} = slice.actions;

// ----------------------------------------------------------------------

// export function getLabels() {
//     return async (dispatch) => {
//         dispatch(slice.actions.startLoading());
//         try {
//             const response = await axios.get('/api/mail/labels');
//             dispatch(slice.actions.getLabelsSuccess(response.data.labels));
//         } catch (error) {
//             dispatch(slice.actions.hasError(error));
//         }
//     };
// }

