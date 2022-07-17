import './App.css';
import { UserContextProvider } from './components/context/UserContext';
import { User } from './components/context/User';
import { DomRef } from './components/ref/DomRef';
import { MutableRef } from './components/ref/MutableRef';
import Counter from './components/class/Counter';

function App() {
   return (
    <div className="App">
       <Counter message='The count value is ' />
    </div>
  );
}

export default App;
