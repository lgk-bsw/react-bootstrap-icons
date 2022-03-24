import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const EmojiKissFill = forwardRef(({ color, size, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill={color}
      {...rest}
    >
      <path
        fillRule="evenodd"
        d="M16 8a8 8 0 1 0-2.697 5.99c-.972-.665-1.632-1.356-1.99-2.062-.388-.766-.419-1.561-.075-2.23.496-.97 1.73-1.466 2.762-1.05.65-.262 1.38-.162 1.957.19.028-.275.043-.555.043-.838ZM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5Zm1.512 3.647c-.347.08-.737.198-1.107.319a.5.5 0 1 1-.31-.95c.38-.125.802-.254 1.192-.343.37-.086.78-.153 1.103-.108.16.022.394.085.561.286.188.226.187.497.131.705a1.894 1.894 0 0 1-.31.593c-.077.107-.168.22-.275.343.107.124.199.24.276.347.142.197.256.397.31.595.055.208.056.479-.132.706-.168.2-.404.262-.563.284-.323.043-.733-.027-1.102-.113a14.87 14.87 0 0 1-1.191-.345.5.5 0 1 1 .31-.95c.371.12.761.24 1.109.321.176.041.325.069.446.084a5.609 5.609 0 0 0-.502-.584.5.5 0 0 1 .002-.695 5.52 5.52 0 0 0 .5-.577 4.465 4.465 0 0 0-.448.082Zm.766-.086-.006-.002c.004 0 .006.002.006.002Zm.002 1.867h-.001l-.005.001a.038.038 0 0 1 .006-.002Zm.157-4.685a.5.5 0 0 1-.874-.486A1.934 1.934 0 0 1 10.25 5.75c.73 0 1.356.412 1.687 1.007a.5.5 0 1 1-.874.486.934.934 0 0 0-.813-.493.934.934 0 0 0-.813.493ZM14 9.828c1.11-1.14 3.884.856 0 3.422-3.884-2.566-1.11-4.562 0-3.421Z"
      />
    </svg>
  );
});

EmojiKissFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

EmojiKissFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default EmojiKissFill;
