import { useReducer } from "react";
import { useState } from "react";
function reducerFun(prevState, action) {
    switch (action.type) {
        case 'delete': {
            return prevState.filter(todo => todo.id != action.id)
        }

        case 'toggle': {
            const updatedState = prevState.map(todo => {
                if (todo.id == action.id) {
                    return { ...todo, isCompleted: !todo.isCompleted }
                }
                return todo
            })
            return updatedState
        }

        case 'add': {
            return [...prevState, { id: prevState.length + 1, title: action.name, isCompleted: false }]
        }

        case 'edit': {
            const updateState = prevState.map(todo => {
                if (todo.id == action.id) {
                    return { ...todo, title: action.name }
                }
                return todo
            })
            return updateState;
        }
    }
}

function Todo() {

    const [newTOdoName, setNewTodoName] = useState('');
    const [isEditMode, setIsEditMode] = useState(false);
    const [editTodoId, setEditTodoId] = useState(0);
    const initialStateValue = [
        { id: 1, title: 'Learn Reduxtoolkit concept by 27th Sep', isCompleted: false },
        { id: 2, title: 'Complete the Nisum suggested courses by 27thsep ', isCompleted: false },
        { id: 3, title: 'Finish the useReduce hook concept by today', isCompleted: false }
    ]
    const [state, dispatch] = useReducer(reducerFun, initialStateValue)

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm">
                    <h2 className="text-center">Todo List</h2>
                    {state.map(todo => (
                        <div key={todo.id} className="my-4 bordor-bottom">
                            <h3 style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}>{todo.title}</h3>
                            <button className="btn btn-danger me-2" onClick={() => dispatch({ type: 'delete', id: todo.id })} >Delete</button>
                            <button className="btn btn-warning me-2" onClick={() => dispatch({ type: 'toggle', id: todo.id })}>{todo.isCompleted ? 'To InProgress' : 'To Complete'}</button>
                            <button className="btn btn-primary" onClick={() => { setIsEditMode(true); setNewTodoName(todo.title); setEditTodoId(todo.id) }}>Edit</button>
                        </div>
                    ))}

                </div>
                <div className="col-sm">
                    <h2 className="text-center">{isEditMode ? 'Edit' : 'Add'} Todo</h2>
                    <div className="my-2">
                        <label>TodoName: </label> <br></br>
                        <input type="text" placeholder="Enter TodoName" className="form-control my-2" value={newTOdoName} onChange={(e) => setNewTodoName(e.target.value)}></input>
                        <button className="btn btn-success my-4" onClick={() => { isEditMode ? dispatch({ type: 'edit', name: newTOdoName, id: editTodoId }) : dispatch({ type: 'add', name: newTOdoName }); setNewTodoName('') }}>{isEditMode ? 'Edit' : 'Add'}</button>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Todo;