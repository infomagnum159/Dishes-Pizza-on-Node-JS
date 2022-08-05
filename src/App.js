import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Orders from './components/Orders/Orders';
import Dishes from './components/Dishes/Dishes';
import AddPizza from './components/AddPizza/AddPizza';
import EditPizza from './EditPizza/EditPizza';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Route exact path='/' component={Dishes} />
        <Route path='/orders' component={Orders} />
        <Route path='/add-dishes' component={AddPizza} />
        <Route path='/:id/edit' component={EditPizza} />
      </Router>
    </div>
  );
}

export default App;
