import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import PropTypes from "prop-types"; // Import PropTypes
import Message from "./Message";
import CountryItem from "./CountryItem";
const CountryList = ({ cities, isLoading }) => {
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );
  const contries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);
  return (
    <ul className={styles.countryList}>
      {contries.map((country) => (
        <CountryItem country={country} key={country.id} />
      ))}
    </ul>
  );
};
CountryList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.object).isRequired, // Validate that cities is an array of objects
  isLoading: PropTypes.bool.isRequired, // Validate that isLoading is a boolean
};

export default CountryList;
