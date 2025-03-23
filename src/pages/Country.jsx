import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Container from '../components/Container/Container';
import GoBackBtn from '../components/GoBackBtn/GoBackBtn';
import Heading from '../components/Heading/Heading';
import Section from '../components/Section/Section';
import CountryInfo from '../components/CountryInfo/CountryInfo';
import { fetchCountry } from '../service/countryApi';

const Country = () => {
  const { countryId } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCountry = async () => {
      try {
        const data = await fetchCountry(countryId);
        if (!data) {
          throw new Error('Country not found');
        }
        setCountry(data);
      } catch (error) {
        setError(error.message);
        navigate('/'); // Якщо країна не знайдена, перенаправляє на головну сторінку
      } finally {
        setLoading(false);
      }
    };

    getCountry();
  }, [countryId, navigate]);

  return (
    <Section>
      <Container>
        <GoBackBtn />
        <Heading title="Country Info" bottom />
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {country && <CountryInfo {...country} />}
      </Container>
    </Section>
  );
};

export default Country;
