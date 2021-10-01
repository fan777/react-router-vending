import { BrowserRouter, Switch, Route } from 'react-router-dom'
import VendingMachine from './VendingMachine';
import Cheetos from './Cheetos';
import Steak from './Steak';
import GummyBears from './GummyBears';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <VendingMachine />
          </Route>
          <Route exact path='/cheetos'>
            <Cheetos />
          </Route>
          <Route exact path='/steak'>
            <Steak />
          </Route>
          <Route exact path='/gummy-bears'>
            <GummyBears />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
