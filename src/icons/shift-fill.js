import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ShiftFill = forwardRef(
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
        className={['bi', 'bi-shift-fill', className].filter(Boolean).join(' ')}
        {...rest}
      >
        {title ? <title>{title}</title> : null}

        <path d="M7.27 2.047a1 1 0 0 1 1.46 0l6.345 6.77c.6.638.146 1.683-.73 1.683H11.5v3a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-3H1.654C.78 10.5.326 9.455.924 8.816z" />
      </svg>
    );
  },
);

ShiftFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
  className: PropTypes.string,
};

ShiftFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
  title: null,
  className: '',
};

export default ShiftFill;
