
import React, {useState, useRef, useSyncExternalStore} from 'react';
import Form from '../components/form/Form'
import Header from '../components/header/Header'
import List from '../components/list/List'
import Layout from '../components/layout/Layout'

import 'bootstrap/dist/css/bootstrap.css'


function TodoList() {

  const [inputs, setInputs] = useState({
    title: '',
    content: '',
    isdone : true
  });

  const {title, content} = inputs;

  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  }

  const [todos, setTodos] = useState([
    {
      id :1,
      title : "리액트 공부하기",
      content : "리액트 기초를 공부해봅시다",
      isdone : true
    
     },
     {
      id :2,
      title : "리액트 알아보기",
      content : "리액트 기초를 알아봅시다",
      isdone : false
    },
    {
      id :3,
      title : "리액트 풀어보기",
      content : "리액트를 풀어봅시다.",
      isdone : true
    },
  ]);

  const nextId = useRef(4);

  const onCreate = (e) => {
    e.preventDefault();
    const todo = {
      id : nextId.current,
      title,
      content,
      isdone :true
    };

    setTodos(todos.concat(todo));
     setInputs({
      title: '',
      content: ''
    });
    nextId.current += 1;
  };
  
  const onRemove = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const onClickButton = id => {
    setTodos(todos.map(
      todo => todo.id ===id ? {...todo, isdone : !todo.isdone} :todo
    ))
  }

  return (<div>
           <Layout>
              <Header/><br/>
              <Form  title={title}
                      content={content}
                      onChange={onChange}
                      onCreate={onCreate}/>
                <List todos={todos}  onRemove={onRemove} onClickButton={onClickButton}/>
             
                </Layout>
          </div>);
}



export default TodoList;
