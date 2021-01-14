import React from "react";
import PropTypes from "prop-types";

const Input = ({ type, className, name, ...props }) => {
  return (
    <input
      tyep={type}
      name={name}
      className={`form-control ${className}`}
      {...props}
    />
  );
};

export const Textarea = ({ className, placeholder, ...props }) => {
  return (
    <textarea
      className={className}
      placeholder={placeholder}
      {...props}
    ></textarea>
  );
};

export default Input;

Textarea.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  rows: PropTypes.string.isRequired,
  cols: PropTypes.string.isRequired,
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  name: PropTypes.string,
};
