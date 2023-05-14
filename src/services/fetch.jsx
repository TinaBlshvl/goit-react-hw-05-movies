import axios from 'axios';

const KEY = 'api_key=7b264c573728240a6ab06336c75c925f';

const fetch = async (url, properties = '', controller = {}) => {
  try {
    const dataMovies = await axios.get(
      `${url}?${KEY}${properties}`,
      controller
    );
    return dataMovies.data;
  } catch (error) {
    console.error(error);
  }
};

export default fetch;
