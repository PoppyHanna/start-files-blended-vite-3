import styles from './CountryInfo.module.css';

const CountryInfo = ({ flag, capital, countryName, languages, population }) => {
  let languageList = [];

  if (Array.isArray(languages)) {
    languageList = languages;
  } else if (typeof languages === 'object' && languages !== null) {
    languageList = Object.values(languages);
  } else {
    languageList = [languages];
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.flag}>
        <img className={styles.img} src={flag} alt={`Flag of ${countryName}`} />
      </div>
      <div className={styles.box}>
        <h3 className={styles.capital}>
          Capital: <span className={styles.accent}>{capital}</span>
        </h3>

        <h1 className={styles.title}>
          {countryName === 'Russian Federation' ? 'MORDOR' : countryName}
        </h1>

        <p className={styles.details}>
          Population: <span className={styles.accent}>{population}</span>
        </p>

        <p className={styles.details}>
          Languages:{' '}
          <span className={styles.accent}>{languageList.join(', ')}</span>
        </p>
      </div>
    </div>
  );
};

export default CountryInfo;
