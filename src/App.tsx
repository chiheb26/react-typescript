import './App.css';
import { Button } from './components/Button';
import { Container } from './components/Container';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Input } from './components/Input';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { User } from './components/state/User';
import { Status } from './components/Status';

function App() {
  const personName= {
    first:'Bruce',
    last:'Lee'
  }
  const nameList = [{first:'Bruce',last:'Lee'},{first:'Clark',last:'Kent'},{first:'Princess',last:'Diana'}]
  return (
    <div className="App">
        {/* <Container styles={{border:'1px solid black',padding:'1rem'}} /> */}
        <User />
    </div>
  );
}

export default App;
