import PropTypes from 'prop-types';

export const MovieSearch = ({ form, value }) => {
  const formSubmit = e => {
    e.preventDefault();

    const value = e.currentTarget.elements.name_movie.value;
    form(value);
  };

  return (
    <div>
      <form action="" onSubmit={formSubmit}>
        <input autoFocus type="text" name="name_movie" defaultValue={value} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

MovieSearch.propTypes = {
  form: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
