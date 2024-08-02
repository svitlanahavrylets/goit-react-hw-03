import css from "./SearchBox.module.css";

function SearchBox({ filterValue, handleFilter }) {
  return (
    <div className={css.inputFindForm}>
      <p className={css.inputTitle}>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        placeholder=""
        value={filterValue}
        onChange={handleFilter}
      />
    </div>
  );
}

export default SearchBox;
