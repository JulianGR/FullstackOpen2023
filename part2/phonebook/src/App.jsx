import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')



  function doesItAlreadyContainsTheName(personsObject, newPerson) {
    return personsObject.some(i => i.name === newPerson.name);
  }


  const addPerson = (event) => {
    event.preventDefault()

    const personObject = {
      name: newName
    }


    if (doesItAlreadyContainsTheName(persons, personObject)) {
      return alert(`${personObject.name} is already added to the book`)
    } else {
      setPersons(persons.concat(personObject))
    }

    setNewName('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const personsToShow = persons

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName}
            onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {personsToShow.map(i => (
          <li key={i.name}>{i.name}</li>

        ))}
      </ul>
    </div>
  )
}

export default App