
import { Container, Grid, Icon, Segment } from 'semantic-ui-react';
import './App.css';
import { DisplayBalance } from './Components/DisplayBalance';
import { DisplayBalances } from './Components/DisplayBalances';
import { EntryLine } from './Components/EntryLine';
import { MainHeader } from './Components/MainHeader';
import { NewEntryForm } from './Components/NewEntryForm';

function App() {
  return (
    <Container>

      <MainHeader title = "Budget" />
      <DisplayBalance title = "Your Balance" value = {500.63} size = "small" />

      <DisplayBalances />

      <MainHeader title = "History" type = "h3" />
      <EntryLine description = "income" value = "$2000" />
      <EntryLine description = "expense" value = "$600" isExpense />


      <MainHeader title = "New Transaction" type = "h3" />
      <NewEntryForm />

    </Container>
  );
}

export default App;
