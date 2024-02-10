import PropTypes from "prop-types";

const Input = ({ type, placeholder, entry, handleFunc }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={entry}
      min="0"
      onChange={handleFunc}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  entry: PropTypes.string.isRequired,
  handleFunc: PropTypes.func.isRequired,
};

export { Input };
