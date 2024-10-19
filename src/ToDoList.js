import React from 'react';  

function TodoList({ tasks }) {  
    return (  
        <ul>  
            {tasks.map((task, index) => (  
                <li key={index}>{task}</li>  
            ))}  
        </ul>  
    );  
}  

export default TodoList;