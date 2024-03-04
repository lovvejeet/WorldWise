import CityItem from "./CityItem";
import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import PropTypes from "prop-types"; // Import PropTypes
import Message from "./Message";
const CityList = ({ cities, isLoading }) => {
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
};
CityList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.object).isRequired, // Validate that cities is an array of objects
  isLoading: PropTypes.bool.isRequired, // Validate that isLoading is a boolean
};

export default CityList;
