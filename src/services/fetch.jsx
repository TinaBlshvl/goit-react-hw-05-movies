import axios from 'axios';
import PropTypes from 'prop-types';

const API_KEY = 'api_key=7b264c573728240a6ab06336c75c925f';

const fetchMovies = async (url, properties = '', controller = {}) => {
  try {
    const dataMovies = await axios.get(
      `${url}?${API_KEY}${properties}`,
      controller
    );
    return dataMovies.data;
  } catch (error) {
    console.error(error);
  }
};

fetchMovies.propTypes = {
  url: PropTypes.string.isRequired,
  properties: PropTypes.string,
  controller: PropTypes.object,
};

export default fetchMovies;
