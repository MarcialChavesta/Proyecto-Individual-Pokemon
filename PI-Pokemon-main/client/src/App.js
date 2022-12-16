import { Route,Switch } from 'react-router-dom';
import './App.css';
import Home from './views/Home/Home'
import About from './views/About/About'

function App() {
  return (
   <>
   <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/about" component={About}/>
   </Switch>
   </>
  );
}

export default App;
