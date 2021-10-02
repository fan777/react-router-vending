import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from './NavBar';
import VendingMachine from './VendingMachine';
import Cheetos from './Cheetos';
import Steak from './Steak';
import GummyBears from './GummyBears';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
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
