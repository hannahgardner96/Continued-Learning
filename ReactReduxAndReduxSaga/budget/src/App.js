
import { useEffect, useState } from 'react';
import { Container } from 'semantic-ui-react';
import './App.css';
import { DisplayBalance } from './Components/DisplayBalance';
import { DisplayBalances } from './Components/DisplayBalances';
import { EntryLines } from './Components/EntryLines';
import { MainHeader } from './Components/MainHeader';
import { ModalEdit } from './Components/ModalEdit';
import { NewEntryForm } from './Components/NewEntryForm';
import { useSelector } from "react-redux"

function App() {
  const [income, setIncome] = useState(0)
  const [expenses, setExpenses] = useState(0)
  const [total, setTotal] = useState(0)
  const [entry, setEntry] = useState()
  const entries = useSelector(state => state.entries)
  const { isOpen, id } = useSelector(state => state.modals)

  useEffect(() => { 
    const index = entries.findIndex(entry => entry.id === id)
    setEntry(entries[index])
  }, [isOpen, id])
  
  useEffect(() => {
    let totalIncome = 0
    let totalExpenses = 0
    entries.map(entry => {
      if (entry.isExpense) {
        return totalExpenses += Number(entry.value)
      } else {
        return totalIncome += Number(entry.value)
      }
    })
    setTotal(totalIncome - totalExpenses)
    setIncome(totalIncome)
    setExpenses(totalExpenses)
  }, [entries])

  return (
    <Container>

      <MainHeader title = "Budget" />
      <DisplayBalance title = "Your Balance" value = {total} size = "small" />

      <DisplayBalances income = { income } expenses = { expenses } />

      <MainHeader title = "History" type = "h3" />
      <EntryLines 
        entries = { entries } 
      />

      <MainHeader title = "New Transaction" type = "h3" />
      <NewEntryForm />

      <ModalEdit isOpen = { isOpen }  { ...entry } />

    </Container>
  );
}

export default App;
