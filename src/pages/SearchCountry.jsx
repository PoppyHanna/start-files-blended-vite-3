import { useState } from 'react';
import Container from '../components/Container/Container';
import Heading from '../components/Heading/Heading';
import Section from '../components/Section/Section';
import SearchForm from '../components/SearchForm/SearchForm';
import CountryList from '../components/CountryList/CountryList';
import { fetchByRegion } from '../service/countryApi';
import Loader from '../components/Loader/Loader';

const SearchCountry = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async region => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchByRegion(region);
      setCountries(data);
    } catch (error) {
      console.error('Error fetching countries:', error);
      setError('Failed to load countries');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section>
      <Container>
        <Heading title="Search Country" bottom />
        <SearchForm onSubmit={handleSearch} />
        {loading && <Loader />}
        {error && <p>{error}</p>}
        {!loading && !error && countries.length > 0 && (
          <CountryList countries={countries} />
        )}
      </Container>
    </Section>
  );
};

export default SearchCountry;
