import { useEffect, useState } from "react";
import { memo } from "react";

function MemoizedChild({ getTodos }) {
    const [todos, setTodos] = useState([])
    useEffect(() => {
        setTodos([...todos, getTodos()])

    }, [getTodos])
    return (<div>
        {todos.map(todo => (<p key={todo?.id}>{todo?.content}</p>))}
    </div>)
}

export default memo(MemoizedChild);