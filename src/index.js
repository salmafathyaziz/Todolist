import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


function Todo(props) {
  return <li input type="checkbox"> { props.t }</li>;
}

function Watch() {
  const tasks = [
    {id: 1, t: 'You'},
    {id: 2, t: 'Breaking Bad'},
    {id: 3, t: 'Prison Break'},
    {id: 4, t: 'Emily in Paris'},
    {id: 5, t: 'Finding Ola'},
    {id: 6, t: 'Dark'},
    {id: 7, t: 'Anne with an e'},
    {id: 8, t: 'Squid game'},
    {id: 9, t: 'The 100'}
  ];
  return (
    <>
	    <h1>To Watch List</h1>
	    <ul>
        {tasks.map((task) => <Todo key={task.id} t={task.t} />)}
      </ul>
    </>
  );
}

ReactDOM.render(<Watch />, document.getElementById('root'));

