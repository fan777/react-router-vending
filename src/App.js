import { BrowserRouter, Route } from 'react-router-dom'

import VendingMachine from './VendingMachine';
import Cheetos from './Cheetos';
import Steak from './Steak';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path='/'>
          <VendingMachine />
        </Route>
        <Route exact path='/cheetos'>
          <Cheetos />
        </Route>
        <Route exact path='/steak'>
          <Steak />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
