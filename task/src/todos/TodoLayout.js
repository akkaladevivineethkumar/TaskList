// TodoLayout.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo,editTodo, saveTodo} from '../redux/slices/todo'; // Update with the correct path
// import { changeName } from '../redux/slices/user';

const TodoLayout = () => {
    const dispatch = useDispatch();
    // dispatch hook to dispatch the action
    // to dispatch the action we need to send the Fure function Name (in slices individual file)


    const { todos, ischeckedUser } = useSelector((state) => state.mytodo);

    // To access the data we need to use useSelector hook
    // useSelector hook to get the Specfic data from the store 
    // To access the date need to send the keyword (in Root Reducer)
    const [newTodo, setNewTodo] = useState('');
    const [editValue, setEditValue] = useState('');
    const [isEdit, setIsEdit] = useState(false);
    // const [check, setIsCheck] = useState(false);

    const handleAddTodo = () => {
        if (newTodo.trim() !== '') {
            dispatch(addTodo(newTodo));
            setNewTodo('');
        } else {
            alert('Please enter a valid todo');
        }
    };

    const handleToggleTodo = (id) => {
        dispatch(toggleTodo(id));
    };

    const handleDeleteTodo = (id) => {
        dispatch(deleteTodo(id))
    }

    const handleEditTodo = (id) => {
        dispatch(editTodo(id))
        setEditValue("")
        setIsEdit(true)
    }

    const handleSaveTodo = () => {
        dispatch(saveTodo(editValue))
        setIsEdit(false)
    }

    return (
        <>
            <div style={{ maxWidth: '100%', margin: 'auto', marginTop: '20px' }}>
                {isEdit ? 
                <div>
                <input
                    type="text"
                    placeholder="Edit Task"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    style={{outline: "none", width: '70%', padding: '8px' }}
                /> 
                <button onClick={handleSaveTodo} style={{ marginLeft: '10px',outline: "none", padding: '8px' }}>
                    Save
                </button>
                </div>
                : 
                <div>
                <input
                    type="text"
                    placeholder="Add Task"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    style={{outline: "none", width: '70%', padding: '8px' }}
                />
                <button onClick={handleAddTodo} style={{ marginLeft: '10px',outline: "none", padding: '8px' }}>
                    Add
                </button>
                </div>
                }
                <ul style={{marginTop: '10px', width: '100%', listStyleType: 'circle', padding: 0 }}>
                    {todos?.map((todo) => (
                        <li
                            key={todo.id}
                            style={{
                                cursor: 'pointer',
                                marginTop: '5px',
                                width: '100%',
                                display: "flex", justifyContent: "space-around", alignItems: 'center',
                                padding: '22px',  
                            }}
                        >
                            <div>
                                {/* <input type="checkbox" onChange={() => handleToggleTodo(todo.id)} checked={todo.completed} /> */}
                               <button style={{  border: 'none', backgroundColor: 'white', textDecoration: todo.completed && !isEdit ? 'line-through' : 'none',marginLeft: '5px' }}>{todo.text}</button>
                            </div>
                            <div>
                                <button onClick={() => handleEditTodo(todo.id)} style={{ outline: "none", marginLeft: '10px', padding: '3px' }}>Edit</button>
                                <button onClick={() => handleDeleteTodo(todo.id)} style={{ outline: "none", marginLeft: '10px', padding: '3px' }}>Delete</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>

    );
};

export default TodoLayout;
