const Form = () => {

return(

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


)






}



export default Form