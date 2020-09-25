import React from 'react';
import classNames from 'classnames';
import { NavLink as RouterNavLink } from 'react-router-dom';

import { Link } from './Link';

export function NavLink({ className, ...rest }) {
  return (
    <Link
      as={RouterNavLink}
      className={classNames(className, 'f6 dib white dim')}
      activeClassName={'bg-black-30'}
      noUnderline
      {...rest}
    />
  );
}
