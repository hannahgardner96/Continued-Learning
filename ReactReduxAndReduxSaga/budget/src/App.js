
import { useEffect, useState } from 'react';
import { Container } from 'semantic-ui-react';
import './App.css';
import { DisplayBalance } from './Components/DisplayBalance';
import { DisplayBalances } from './Components/DisplayBalances';
import { EntryLines } from './Components/EntryLines';
import { MainHeader } from './Components/MainHeader';
import { ModalEdit } from './Components/ModalEdit';
import { NewEntryForm } from './Components/NewEntryForm';

const initialEntries = [
  {
    description: "Work Income",
    value: 1000.00,
    isExpense: false,
    id: 1
  },
  {
    description: "Water Bill",
    value: 20.00,
    isExpense: true,
    id: 2
  },
  {
    description: "Rent",
    value: 1400.00,
    isExpense: true,
    id: 3
  },
  {
    description: "Power Bill",
    value: 63.00,
    isExpense: true,
    id: 4
  }
]

function App() {
  const [entries, setEntries] = useState(initialEntries)
  const [description, setDescription] = useState("")
  const [value, setValue] = useState("")
  const [isExpense, setIsExpense] = useState(true)
  const [isOpen, setIsOpen] = useState(false)
  const [entryId, setEntryId] = useState()
  const [income, setIncome] = useState(0)
  const [expenses, setExpenses] = useState(0)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    if (!isOpen && entryId) {
      const index = entries.findIndex(entry => entry.id === entryId)
      const newEntries = [...entries]
      newEntries[index].description = description
      newEntries[index].value = value
      newEntries[index].isExpense = isExpense
      setEntries(newEntries)
      resetEntry()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen])
  
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

  const deleteEntry = (id) => {
    const entry = entries.filter(entry => entry.id !== id)
    setEntries(entry)
  }
  
  const addEntry = () => {
    const newEntry = entries.concat({id: entries.length + 1, description, value, isExpense})
    setEntries(newEntry)
    resetEntry()
  }

  const editEntry = (id) => {
    if (id) {
      const index = entries.findIndex(entry => entry.id === id)
      const entry = entries[index]
      setEntryId(id)
      setDescription(entry.description)
      setValue(entry.value)
      setIsExpense(entry.isExpense)
      setIsOpen(true)
    }
  }

  const resetEntry = () => {
    setDescription("")
    setValue("")
    setIsExpense(true)
  }

  return (
    <Container>

      <MainHeader title = "Budget" />
      <DisplayBalance title = "Your Balance" value = {total} size = "small" />

      <DisplayBalances income = { income } expenses = { expenses } />

      <MainHeader title = "History" type = "h3" />
      <EntryLines 
        entries = { entries } 
        deleteEntry = { deleteEntry } 
        setIsOpen = { setIsOpen } 
        editEntry = { editEntry }
      />

      <MainHeader title = "New Transaction" type = "h3" />
      <NewEntryForm 
        addEntry = { addEntry } 
        description = { description } 
        value = { value } 
        isExpense = { isExpense }
        setDescription = { setDescription }
        setValue = { setValue }
        setIsExpense = { setIsExpense }
      />

      <ModalEdit 
        isOpen = { isOpen } 
        setIsOpen = { setIsOpen } 
        description = { description } 
        value = { value } 
        isExpense = { isExpense }
        setDescription = { setDescription }
        setValue = { setValue }
        setIsExpense = { setIsExpense }
      />

    </Container>
  );
}

export default App;
