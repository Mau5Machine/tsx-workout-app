import React from 'react';
import SiteLayout from 'layout/SiteLayout';
import InputField from 'components/InputField';
import { useState } from 'react';
import { Todo } from './model';

const About:React.FC = () => {
  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()
    if (todo) {
      setTodos([...todos, {id: Date.now(), todo:todo, isDone:false}])
      setTodo("")
    }
  }

  return (
    <SiteLayout
      title="About RockStar"
    >
      <div>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      </div>
    </SiteLayout>
  );
};

export default About;