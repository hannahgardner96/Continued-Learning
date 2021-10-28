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

export const reducer = (state = initialEntries, action) => {
  let newEntries
  switch (action.type) {
    case "ADD_ENTRY":
      newEntries = state.concat({...action.payload})  
      return newEntries
    case "REMOVE_ENTRY":
      newEntries = state.filter((entry) => entry.id !== action.payload.id)
      return newEntries
    case "UPDATE_ENTRY":
      newEntries = [...state]
      const index = newEntries.findIndex(entry => entry.id === action.payload.id)
      newEntries[index] = { ...action.payload.entry }
      return newEntries
    default: 
      return state
  }
}