import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phoneNumber: '666' }
  ])
  const [newName, setNewName] = useState('')
  const [newPhoneNumber, setNewPhoneNumber] = useState('')



  function doesItAlreadyContainsTheName(personsObject, newPerson) {
    return personsObject.some(i => i.name === newPerson.name);
  }


  const addPerson = (event) => {
    event.preventDefault()

    const personObject = {
      name: newName,
      phoneNumber: newPhoneNumber
    }


    if (doesItAlreadyContainsTheName(persons, personObject)) {
      return alert(`${personObject.name} is already added to the book`)
    } else {
      setPersons(persons.concat(personObject))
    }

    setNewName('')
    setNewPhoneNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event) => {
    setNewPhoneNumber(event.target.value)
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName}
            onChange={handleNameChange} />
        </div>
        <div>
          phone number: <input value={newPhoneNumber}
            onChange={handlePhoneChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(i => (
          <li key={i.name}>{i.name} - {i.phoneNumber}  </li>

        ))}
      </ul>
    </div>
  )
}

export default App