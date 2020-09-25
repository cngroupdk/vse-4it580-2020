import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';

import { TransparentButton } from 'src/atoms/';

export function ReloadButton({ isLoading, onClick, className }) {
  return (
    <TransparentButton className={className} onClick={onClick}>
      <FontAwesomeIcon icon={faSyncAlt} spin={isLoading} className="mr2" />
      Reload
    </TransparentButton>
  );
}
