import Grid from '../Grid/Grid';
import GridItem from '../GridItem/GridItem';
import { Link } from 'react-router-dom';

const CountryList = ({ countries, onCountryClick }) => {
  return (
    <Grid>
      {countries.map(country => (
        <GridItem key={country.id}>
          <button onClick={() => onCountryClick(country.id)}>
            <img src={country.flag} alt={country.name} />
            <p>{country.name}</p>
          </button>

          <Link to={`/country/${country.id}`}></Link>
        </GridItem>
      ))}
    </Grid>
  );
};

export default CountryList;
