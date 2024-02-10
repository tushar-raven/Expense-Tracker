import PropTypes from "prop-types";

const Button = ({ buttonName }) => {
  return <button>{buttonName}</button>;
};

Button.propTypes = {
  setTotal: PropTypes.func.isRequired,
  buttonName: PropTypes.string.isRequired,
};

export { Button };
