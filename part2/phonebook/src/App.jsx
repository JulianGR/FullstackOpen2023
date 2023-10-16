import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ])
  const [newName, setNewName] = useState('')
  const [newPhoneNumber, setNewPhoneNumber] = useState('')
  const [nameToFilter, setNamesToFilter] = useState('')


  function doesItAlreadyContainsTheName(personsObject, newPerson) {
    return personsObject.some(i => i.name === newPerson.name);
  }


  const addPerson = (event) => {
    event.preventDefault()

    const personObject = {
      name: newName,
      number: newPhoneNumber
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


  const handleNameFilter = (event) => {
    setNamesToFilter(event.target.value)
  }


  const personsFiltered =
    !nameToFilter || nameToFilter === ""
      ? persons
      : persons.filter(i =>
        i.name.toLowerCase().includes(nameToFilter.toLowerCase())
      );


  return (
    <div>
      <h1>Phonebook</h1>

      <h2>Filter</h2>
      <div>
        name to filter with: <input value={nameToFilter}
          onChange={handleNameFilter} />
      </div>





      <h2>Form</h2>
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
        {personsFiltered.map(i => (
          <li key={i.id}>{i.name} - {i.number}  </li>

        ))}
      </ul>



    </div>
  )
}

export default App