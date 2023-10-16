/* eslint-disable react/prop-types */
const Form = ({addPerson, newName, handleNameChange, newPhoneNumber, handlePhoneChange}) => {

return(
<div>
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
</div>

)






}



export default Form