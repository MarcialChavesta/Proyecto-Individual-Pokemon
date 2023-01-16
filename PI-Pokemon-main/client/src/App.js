import { Route,Switch } from 'react-router-dom';
import './App.css';
import Home from './views/Home/Home'
import About from './views/About/About'
import PokemonDetail from './views/PokemonDetail/PokemonDetail';
import LandingPage from './views/LandingPage/LandingPage';
import CreatePokemon from './views/CreatePokemon/CreatePokemon';

function App() {
  return (
   <>
   <Switch>
   <Route exact path="/" component={LandingPage}/>
    <Route exact path="/pokemons" component={Home}/>
    <Route exact path="/about" component={About}/>
    <Route exact path="/pokemons/:id" component={PokemonDetail} />
    <Route exact path="/createpokemon" component={CreatePokemon} />
   </Switch>
   </>
  );
}

export default App;
