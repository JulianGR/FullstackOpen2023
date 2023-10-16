/* eslint-disable react/prop-types */
const Filter = ({ nameToFilter, handleNameFilter }) => (
    <>
     <h2>Filter</h2>
        <div>
          name to filter with: <input value={nameToFilter}
            onChange={handleNameFilter} />
        </div>
    </>
  );

  export default Filter