import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import './App.css';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
         <Header/>
        <Switch>
          <Route exact path='/' component={Login} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
