import React from 'react';
import Todo from '../todo/Todo'
import './style.css'

function List({todos, onRemove, onClickButton}) {
    return(
        <div>
            <br/>
           <h2>Working...🔥</h2>     
                <div>
                    {todos.filter(todo => todo.isdone)
                    .map(todo => (
                    <Todo todo={todo} key={todo.id} onRemove={onRemove} onClickButton={onClickButton}/>
                ))}
                </div>
                <br/>

           <h2>Done..!🎉</h2>
           {todos.filter(todo => !todo.isdone)
                .map(todo => (
                  <Todo todo={todo} key={todo.id} onRemove={onRemove} onClickButton={onClickButton}/>
           ))}     

        </div>
    )
}

export default List;

