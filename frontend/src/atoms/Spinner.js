import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFeatherAlt } from '@fortawesome/free-solid-svg-icons';

export function Spinner(props) {
  return <FontAwesomeIcon icon={faFeatherAlt} spin {...props} />;
}
