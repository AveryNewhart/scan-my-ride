import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
        <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </div>
  )
}

export default App
