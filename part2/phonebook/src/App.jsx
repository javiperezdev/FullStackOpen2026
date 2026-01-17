import { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  
  const addPerson = (event) => {
    event.preventDefault();
    const nameObject = {
      id: String(persons.length + 1),
      name: newName,
      number: newNumber
  }
      if (persons.some(p => p.name.toLowerCase() == newName.toLowerCase())) {
        alert(`${newName} is already in the phonebook!`)
        return;
      }

      setPersons(persons.concat(nameObject))
      setNewName('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
          {persons.map(person => <Person key={person.id} person={person} />)}
      </div>
    </div>
  )
}

export default App;