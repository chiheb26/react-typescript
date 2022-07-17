import './App.css';
import { Private } from './components/auth/Private';
import { Profile } from './components/auth/Profile';
import { List } from './components/generics/List';

function App() {
   return (
    <div className="App">
      <List items={['Batman','Superman','Wonder Woman']} onClick={(item)=>console.log(item)} />
      <List items={[1,2,3]} onClick={(item)=>console.log(item)} />
      <List items={[{name:'e'},{name:'e'},{name:'e'}]} onClick={(item)=>console.log(item)} />
    </div>
  );
}

export default App;
