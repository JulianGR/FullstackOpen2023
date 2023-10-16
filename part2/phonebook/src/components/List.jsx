/* eslint-disable react/prop-types */

const List = ({ personsFiltered }) => {

    return (
        <>
            <h2>Numbers</h2>
            <ul>
                {personsFiltered.map(i => (
                    <li key={i.id}>{i.name} - {i.number}  </li>

                ))}
            </ul>
        </>

    )






}



export default List