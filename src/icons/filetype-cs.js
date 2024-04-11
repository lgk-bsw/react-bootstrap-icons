import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const FiletypeCs = forwardRef(
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
        className={['bi', 'bi-filetype-cs', className]
          .filter(Boolean)
          .join(' ')}
        {...rest}
      >
        {title ? <title>{title}</title> : null}

        <path
          fillRule="evenodd"
          d="M14 4.5V14a2 2 0 0 1-2 2H8v-1h4a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM3.629 15.29a1.2 1.2 0 0 1-.112-.449h.765a.58.58 0 0 0 .255.384q.105.073.249.114t.32.041q.245 0 .412-.07a.56.56 0 0 0 .255-.193.5.5 0 0 0 .085-.29.39.39 0 0 0-.152-.326q-.153-.12-.463-.193l-.618-.143a1.7 1.7 0 0 1-.54-.214 1 1 0 0 1-.35-.367 1.1 1.1 0 0 1-.124-.524q0-.366.19-.639.191-.272.528-.422t.776-.149q.458 0 .78.152.324.153.5.41.18.255.2.566h-.75a.56.56 0 0 0-.12-.258.6.6 0 0 0-.246-.181.9.9 0 0 0-.37-.068q-.324 0-.512.152a.47.47 0 0 0-.185.384q0 .18.144.3a1 1 0 0 0 .404.175l.621.143q.325.075.566.211t.375.358.134.56q0 .37-.187.656a1.2 1.2 0 0 1-.54.439q-.351.158-.858.158a2.2 2.2 0 0 1-.665-.09 1.4 1.4 0 0 1-.477-.252 1.1 1.1 0 0 1-.29-.375m-2.72-2.23a1.7 1.7 0 0 0-.103.633v.495q0 .369.102.627a.83.83 0 0 0 .299.392.85.85 0 0 0 .478.132.86.86 0 0 0 .4-.088.7.7 0 0 0 .273-.249.8.8 0 0 0 .118-.363h.764v.076a1.27 1.27 0 0 1-.225.674q-.205.29-.551.454a1.8 1.8 0 0 1-.785.164q-.54 0-.914-.217a1.4 1.4 0 0 1-.572-.626Q0 14.756 0 14.188v-.498q0-.569.196-.979a1.44 1.44 0 0 1 .572-.633q.378-.222.91-.222.33 0 .607.097.281.093.49.272a1.32 1.32 0 0 1 .465.964v.073h-.764a.85.85 0 0 0-.12-.38.7.7 0 0 0-.273-.261.8.8 0 0 0-.398-.097.8.8 0 0 0-.475.138.87.87 0 0 0-.302.398Z"
        />
      </svg>
    );
  },
);

FiletypeCs.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
  className: PropTypes.string,
};

FiletypeCs.defaultProps = {
  color: 'currentColor',
  size: '1em',
  title: null,
  className: '',
};

export default FiletypeCs;
