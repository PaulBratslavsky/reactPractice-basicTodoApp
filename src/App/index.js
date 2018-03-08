import React from 'react';
import Todo from './Todo';
import Header from './Header';

const App = () => {
    return(
        <div className="container text-center">
            <Header />
            <Todo />
        </div>
    );
}

export default App;