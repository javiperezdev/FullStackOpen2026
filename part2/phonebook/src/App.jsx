import { useState, useEffect } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonsForm from './components/PersonsForm'
import personServices from './services/personServices'



const App = () => {

  const [persons, setPersons] = useState([]) 

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {

    personServices
    .getAll()
    .then(initialPersons => {setPersons(initialPersons)})
  }, []) 
  
  const addPerson = (event) => {
    event.preventDefault();
    const personObj = {
      id: String(persons.length + 1),
      name: newName,
      number: newNumber
  }
      if (persons.some(p => p.name.toLowerCase() == newName.toLowerCase())) {
        alert(`${newName} is already in the phonebook!`)
        return;
      }

      personServices
      .create(personObj)
      .then(newPerson => {
        setPersons(persons.concat(newPerson))
        setNewName('')
        setNewNumber('')
      })
  }

  const personsToShow = persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>      
        filter shown with <Filter newFilter={newFilter} handleFilterChange={handleFilterChange} />
      </div>
        <PersonsForm addPerson={addPerson} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} newName={newName} newNumber={newNumber}/>
      <h2>Numbers</h2>
      <div>
        <Persons personsToShow={personsToShow}/>
      </div>
    </div>
  )
}

export default App;