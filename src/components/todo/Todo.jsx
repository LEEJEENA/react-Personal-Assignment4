import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css'

function Todo({ todo, onRemove, onClickButton}) {

  
  return (
    <div className='Todobox'>
      <div className="Todo-b">
        <b >{todo.title}</b>
        <div>{todo.content}</div>
      </div>
      <div className="Todo-button">
        <button type="button" class="btn btn-outline-danger" onClick={() => onRemove(todo.id)}>삭제하기</button>
        {todo.isdone===true? <button type="button" class="btn btn-outline-success" onClick={() =>onClickButton(todo.id)}>완료</button> : <button type="button" class="btn btn-outline-success" onClick={() =>onClickButton(todo.id)}>취소</button>}
      </div>
    

    </div>
  );
}

export default Todo;

