import './App.css';
import { Private } from './components/auth/Private';
import { Profile } from './components/auth/Profile';
import { List } from './components/generics/List';
import { RandomNumber } from './components/restrictions/RandomNumber';
import { Toast } from './components/templateLiterals/Toast';

function App() {
   return (
    <div className="App">
      <Toast position='Center' />
    </div>
  );
}

export default App;
