import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '../components/Container/Container';
import Heading from '../components/Heading/Heading';
import Section from '../components/Section/Section';
import CountryList from '../components/CountryList/CountryList';
import { getCountries } from '../service/countryApi';
import Loader from '../components/Loader/Loader';
import CountryInfo from '../components/CountryInfo/CountryInfo';

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const data = await getCountries();
        setCountries(data);
      } catch (error) {
        setError('Failed to load countries');
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  const handleCountryClick = countryId => {
    const selected = countries.find(country => country.id === countryId);
    setSelectedCountry(selected);
    navigate(`/country/${countryId}`);
  };

  const handleBackToList = () => {
    setSelectedCountry(null);
    navigate('/'); // Повертає до списку
  };

  return (
    <Section>
      <Container>
        <Heading title="Home" bottom />
        {loading && <Loader />}
        {error && <p>{error}</p>}

        {selectedCountry ? (
          <div>
            <CountryInfo {...selectedCountry} />
            <button onClick={handleBackToList} className="back-to-list-btn">
              Back to List
            </button>
          </div>
        ) : (
          <CountryList
            countries={countries}
            onCountryClick={handleCountryClick}
          />
        )}
      </Container>
    </Section>
  );
};

export default Home;
