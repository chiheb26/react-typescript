import './App.css';
import { Private } from './components/auth/Private';
import { Profile } from './components/auth/Profile';
import { List } from './components/generics/List';
import { RandomNumber } from './components/restrictions/RandomNumber';

function App() {
   return (
    <div className="App">
      <RandomNumber value={100}  isNegative={true} />
    </div>
  );
}

export default App;
