import React from 'react';

import {
  AvatarPhoto,
  Button,
  ErrorBanner,
  Heading,
  Loading,
  MainSection,
} from 'src/atoms/';
import { QuackForm, ReloadButton } from 'src/molecules/';
import { QuackList, TopNavigation } from 'src/organisms/';

export function UserDetailTemplate({
  userName,
  data,
  loading,
  error,
  onReload,
  quackFormState,
  currentUser,
}) {
  const showQuackForm =
    quackFormState && currentUser && currentUser.userName === userName;

  return (
    <>
      <TopNavigation />
      <MainSection>
        {loading && !data && <Loading />}

        {error && (
          <ErrorBanner title={error.message}>
            <Button color="red" onClick={onReload}>
              Reload
            </Button>
          </ErrorBanner>
        )}

        {data && (
          <>
            <header>
              <AvatarPhoto
                src={data.user.profileImageUrl}
                alt={data.user.name}
                size="4"
                className="mb2"
              />
              <Heading size="lg">{data.user.name}</Heading>
              <Heading size="sm" className="fw4 gray">
                @{data.user.userName}
              </Heading>
            </header>

            {showQuackForm && <QuackForm {...quackFormState} />}

            <ReloadButton
              onClick={onReload}
              isLoading={loading}
              className="fr"
            />

            <QuackList quacks={data.user.quacks} />
          </>
        )}
      </MainSection>
    </>
  );
}
