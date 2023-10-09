import { Deferred } from "jquery";
import MemoizedChild from "./MemoizedChild";
import { useCallback, useMemo, useState } from "react";
import { all } from "axios";

function ExampleHooks() {

    const todos = [
        { id: 0, content: 'You often feel completely overwhelmed' },
        { id: 1, content: 'You sometimes forget to do things that are important' },
        { id: 2, content: 'People have to chase you to get things done' },
        { id: 3, content: 'You find it in a struggle to keep to deadline' },
        { id: 4, content: 'If the link in your email doesnot work ' }
    ]

    const [count, setCount] = useState(0);
    const [value, setValue] = useState(1);
    const [double, setDouble] = useState(1)
    const [reverseCount, setReverseCount] = useState(100);

    const getTodos = useCallback(() => {
        console.log("getTodos function called when count value changes")
        return todos[count];
    }, [count])




    const slowFunction = () => {

        console.log("Slow function called")
        for (let i = 0; i <= 1000000000; i++) {
        }
        return value * 2;
    }
    const getDoublevalue = useMemo(() => slowFunction(), [value]);

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm">
                    <h4>UseCallback hook Example </h4>
                    <p>{reverseCount}</p>
                    <button onClick={() => setReverseCount(reverseCount - 1)}>Count -1</button>
                    <button onClick={() => setCount(count + 1)}>Count+1 </button>
                    <MemoizedChild getTodos={getTodos}></MemoizedChild>
                </div>
                <div className="col-sm">
                    <h4>UseMeno hook Example</h4>
                    <p>{value}</p>
                    <button onClick={() => setValue(value + 1)}>Add +1</button>
                    <p>{double}</p>
                    <button onClick={() => setDouble(getDoublevalue)}>Double num</button>
                </div>
            </div>




        </div>
    )
}

export default ExampleHooks;