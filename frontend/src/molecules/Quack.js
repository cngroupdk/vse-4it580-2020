import React from 'react';

import { AvatarPhoto, Link, UserName, UserUserName } from 'src/atoms/';
import { formatDate } from 'src/utils/date';
import { route } from 'src/Routes';

export function Quack({ quack }) {
  const {
    user: { name, userName, profileImageUrl },
    text,
    createdAt,
  } = quack;

  const linkToUser = route.userDetail(userName);

  return (
    <article className="flex w-100 bb b--black-10 pb2 mt2">
      <div className="w3">
        <Link to={linkToUser}>
          <AvatarPhoto src={profileImageUrl} alt={name} />
        </Link>
      </div>
      <div className="pl3 flex-auto">
        <div className="pb2">
          <Link to={linkToUser} className="black-90">
            <UserName name={name} /> <UserUserName userName={userName} />
          </Link>
          {' - '}
          <span className="f6 fw4 black-60">{formatDate(createdAt)}</span>
        </div>
        <div className="black-90 pre-line break-word">{text}</div>
      </div>
    </article>
  );
}
