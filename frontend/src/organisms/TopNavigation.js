import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFeatherAlt } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';

import { AvatarPhoto, Link, NavLink, Button } from 'src/atoms/';
import { useAuth } from 'src/utils/auth';
import { route, PRACTICALS } from 'src/Routes';

export function TopNavigation() {
  const { user, signout } = useAuth();
  const history = useHistory();

  return (
    <nav className="flex justify-between bb b--white-10 bg-dark-green white">
      <Link
        to={route.home()}
        noUnderline
        className="b white flex items-center pv2 ph3"
      >
        <FontAwesomeIcon icon={faFeatherAlt} className="mr2 f4" />
        Quacker
      </Link>
      <div className="flex-grow flex items-center">
        <NavLink exact to={route.home()} className="pa3">
          Home
        </NavLink>
        {PRACTICALS.map(({ id }) => (
          <NavLink to={route.practical(id)} className="pa3" key={id}>
            {id}
          </NavLink>
        ))}
        <NavLink to={route.about()} className="pa3">
          About
        </NavLink>
        {user ? (
          <>
            <NavLink
              to={route.userDetail(user.userName)}
              noUnderline
              className="ph3 pv1 h-100 flex items-center"
            >
              <AvatarPhoto
                className="v-mid dib mr2"
                src={user.profileImageUrl}
                alt={user.userName}
                size={2}
              />{' '}
              {user.name}
            </NavLink>
            <Button
              color="navbar"
              border
              narrow
              onClick={() => {
                signout();
                history.push(route.home());
                window.location.reload();
              }}
            >
              Sign Out
            </Button>
          </>
        ) : (
          <>
            <NavLink to={route.signIn()} className="pa3">
              Sign In
            </NavLink>
            <Button
              to={route.signUp()}
              as={Link}
              color="navbar"
              narrow
              border
              noUnderline
            >
              Sign Up
            </Button>
          </>
        )}
      </div>
    </nav>
  );
}
