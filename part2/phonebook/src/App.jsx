import { useState, useEffect } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonsForm from './components/PersonsForm'
import personServices from './services/personServices'
import Notification from './components/Notification'
import './index.css'



const App = () => {

  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [message, setMessage] = useState(null)
  const [messageType, setMessageType] = useState('')


  useEffect(() => {
    personServices
    .getAll()
    .then(initialPersons => {setPersons(initialPersons)})
  }, []) 
  
    const addPerson = (event) => {
      event.preventDefault();
      const personObj = {
        name: newName,
        number: newNumber
    }
    const existingPerson = persons.find(p => p.name.toLowerCase() === newName.toLowerCase())
  
    if (existingPerson) {
      if (window.confirm(`${newName} is already in the phonebook, do you want to update the number?`)) {
          personServices
          .update(existingPerson.id, personObj)
          .then(response => setPersons(persons.map(person => person.id === existingPerson.id ? response : person)))
          
          setMessageType('success')
          setMessage(`${newName} succefully modified!`) 
      }

      else {
      setMessageType('error')
      setMessage(`${newName} number won't be modified`) 

      }

      setNewName('')
      setNewNumber('')
      setTimeout(() => {          
        setMessage(null) 
        setMessageType('')       
          }, 3000)
      return
    }

      personServices
      .create(personObj)
      .then(newPerson => {
        setPersons(persons.concat(newPerson))
        setNewName('')
        setNewNumber('')

        setMessageType('success')
        setMessage(`added ${newName}!`)

        setTimeout(() => {          
          setMessage(null) 
          setMessageType('')       
          }, 3000)
      })
  }

  const executeDeletePerson = (id) => {
    personServices
    .deletePerson(id)
    .then(() => setPersons(persons.filter(person => person.id != id)))
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

  const handleDelete = (id, name) => {
    if(window.confirm(`Are you sure to delete ${name} from the phonebook?`)) {
      executeDeletePerson(id)
      setMessageType('success')
      setMessage(`${name} was successfully deleted!`)
    }
    else {
      setMessageType('error')
      setMessage(`${name} won't be deleted!`)
    }
    setTimeout(() => {          
      setMessage(null) 
      setMessageType('')       
        }, 3000)
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <Notification info={message} type={messageType} />      
      <div>      
        filter shown with <Filter newFilter={newFilter} handleFilterChange={handleFilterChange} />
      </div>
        <PersonsForm addPerson={addPerson} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} newName={newName} newNumber={newNumber}/>
      <h2>Numbers</h2>
      <div>
        <Persons personsToShow={personsToShow} handleDelete={handleDelete}/>
      </div>
    </div>
  )
}

export default App;