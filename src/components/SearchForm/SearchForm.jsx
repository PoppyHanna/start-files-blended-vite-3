import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import styles from './SearchForm.module.css';

const regions = [
  { id: 'africa', value: 'africa', name: 'Africa' },
  { id: 'americas', value: 'americas', name: 'America' },
  { id: 'asia', value: 'asia', name: 'Asia' },
  { id: 'europe', value: 'europe', name: 'Europe' },
  { id: 'oceania', value: 'oceania', name: 'Oceania' },
];

const SearchForm = ({ onSubmit }) => {
  const [region, setRegion] = useState('');

  const handleChange = event => {
    setRegion(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!region) return;
    onSubmit(region);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <button className={styles.button} type="submit">
        <FiSearch size="16px" />
      </button>
      <select
        aria-label="select"
        className={styles.select}
        name="region"
        required
        value={region}
        onChange={handleChange}
      >
        <option disabled value="">
          Select a region
        </option>
        {regions.map(({ id, value, name }) => (
          <option key={id} value={value}>
            {name}
          </option>
        ))}
      </select>
    </form>
  );
};

export default SearchForm;
