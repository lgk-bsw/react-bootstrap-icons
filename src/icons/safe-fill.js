import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const SafeFill = forwardRef(
  ({
    color, size, title, className, ...rest
  }, ref) => {
    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        width={size}
        height={size}
        fill={color}
        className={['bi', 'bi-safe-fill', className].filter(Boolean).join(' ')}
        {...rest}
      >
        {title ? <title>{title}</title> : null}

        <path d="M9.778 9.414A2 2 0 1 1 6.95 6.586a2 2 0 0 1 2.828 2.828" />
        <path d="M2.5 0A1.5 1.5 0 0 0 1 1.5V3H.5a.5.5 0 0 0 0 1H1v3.5H.5a.5.5 0 0 0 0 1H1V12H.5a.5.5 0 0 0 0 1H1v1.5A1.5 1.5 0 0 0 2.5 16h12a1.5 1.5 0 0 0 1.5-1.5v-13A1.5 1.5 0 0 0 14.5 0zm3.036 4.464 1.09 1.09a3 3 0 0 1 3.476 0l1.09-1.09a.5.5 0 1 1 .707.708l-1.09 1.09c.74 1.037.74 2.44 0 3.476l1.09 1.09a.5.5 0 1 1-.707.708l-1.09-1.09a3 3 0 0 1-3.476 0l-1.09 1.09a.5.5 0 1 1-.708-.708l1.09-1.09a3 3 0 0 1 0-3.476l-1.09-1.09a.5.5 0 1 1 .708-.708M14 6.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 1 0" />
      </svg>
    );
  },
);

SafeFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
  className: PropTypes.string,
};

SafeFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
  title: null,
  className: '',
};

export default SafeFill;
