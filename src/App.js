import React from 'react';
import CounterContainer from './containers/CounterContainer';
import TodosContaincer from './containers/TodosContaincer';

function App() {
  return (
    <div>
      <CounterContainer number={0} />
      <hr />
      <TodosContaincer />
    </div>
  );
}

export default App;
