import './App.css';
import { Private } from './components/auth/Private';
import { Profile } from './components/auth/Profile';
import { List } from './components/generics/List';
import { CustomButton } from './components/html/Button';
import { Text } from './components/polymorphic/Text';
import { RandomNumber } from './components/restrictions/RandomNumber';
import { Toast } from './components/templateLiterals/Toast';

function App() {
   return (
    <div className="App">
      <Text as='h1' size='lg'>Heading</Text>
      <Text as='p' size='md'>Paragraph</Text>
      <Text as='label' size='sm' color='secondary'>Label</Text>
    </div>
  );
}

export default App;
