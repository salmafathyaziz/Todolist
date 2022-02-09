import React from 'react';
import ReactDOM from 'react-dom';

function List(props) {
  return <li>{ props.task }</li>;
}

function Task() {
  const tasks = [
    {id: 1, task: 'Wake up at 9 am'},
    {id: 2, task: 'Make bed'},
    {id: 3, task: 'Make breakfast'},
    {id: 4, task: 'Go for a run'},
    {id: 5, task: 'Read Assignment'}

  ];
  return (
    <>
	    <h1>My To Do List</h1>
	    <ul>
        {tasks.map((tsk) => <List key={tsk.id} task={tsk.task} />)}
      </ul>
    </>
  );
}

ReactDOM.render(<Task />, document.getElementById('root'));
