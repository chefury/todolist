import React,{useState} from "react";

const AddToDo =({addTodo}) =>{

    const [input, setInput] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!input.trim()) return;

        const newTodo = {
            id:Date.now(),
            text:input,
            completed:false
        };

        addTodo(newTodo);
        setInput('');

    };

    return(
        <from onSubmit={handleSubmit}>
        <input 
        type='text'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new Task"
        ></input>

        <button type="submit">add</button>
        </from>
    );
};
export default AddToDo;