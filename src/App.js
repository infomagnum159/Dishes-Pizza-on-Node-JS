import React from 'react';
import { Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Orders from './container/Orders/Orders';
import Dishes from './container/Dishes/Dishes';
import AddPizza from './components/AddPizza/AddPizza';
import EditPizza from './components/EditPizza/EditPizza';
import './App.css';

function App() {
  return (
    <div className="App">
        <Navigation />
        <Route exact path='/' component={Dishes} />
        <Route path='/orders' component={Orders} />
        <Route path='/add-dishes' component={AddPizza} />
        <Route path='/:id/edit' component={EditPizza} />
    </div>
  );
}

export default App;
