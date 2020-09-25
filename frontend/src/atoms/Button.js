import React from 'react';
import classNames from 'classnames';

const DEFAULT_COLOR_CLASSES = 'white bg-green hover-bg-dark-green';

const COLORS = {
  green: DEFAULT_COLOR_CLASSES,
  navbar: 'f6 white bg-transparent hover-bg-white hover-black mh3 b--white-20',
  red: 'white bg-red hover-bg-dark-red',
};

export function Button({
  children,
  color,
  className,
  as: Component = 'button',
  border = false,
  narrow = false,
  disabled,
  ...rest
}) {
  const colorClasses = COLORS[color] || DEFAULT_COLOR_CLASSES;

  return (
    <Component
      className={classNames(
        'dib bg-animate pv2 br-pill',
        narrow ? 'ph3' : 'ph4',
        border ? 'ba' : 'bn',
        { 'o-50': disabled },
        colorClasses,
        className,
      )}
      type="button"
      disabled={disabled}
      {...rest}
    >
      {children}
    </Component>
  );
}
